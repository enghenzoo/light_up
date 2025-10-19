import { NextResponse } from "next/server";
import axios, { AxiosError } from "axios";
import jwt from "jsonwebtoken";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get("code");

    if (!code)
      return NextResponse.redirect(
        new URL("/login?error=missing_code", req.url)
      );

    const tokenRes = await axios.post(
      "https://oauth2.googleapis.com/token",
      new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: `${process.env.APP_URL}/api/auth/google/callback`,
        grant_type: "authorization_code",
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const { access_token } = tokenRes.data;

    const userRes = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: { Authorization: `Bearer ${access_token}` },
      }
    );

    const googleUser = userRes.data;

    const existing = await db
      .select()
      .from(users)
      .where(eq(users.email, googleUser.email))
      .get();

    let user = existing;

    if (!existing) {
      const inserted = await db
        .insert(users)
        .values({
          name: googleUser.name,
          email: googleUser.email,
          provider: "google",
          providerId: googleUser.id,
        })
        .returning();
      user = inserted[0];
    }

    const appToken = jwt.sign(
      { id: user?.id, email: user?.email, name: user?.name },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    const res = NextResponse.redirect(new URL("/", req.url));

    res.cookies.set("token", appToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60,
    });

    return res;
  } catch {
    (err: AxiosError) =>
      console.log(
        "cause:",
        err.cause,
        "code:",
        err.code,
        "message:",
        err.message
      );

    return NextResponse.redirect(new URL("/login?error=oauth_failed", req.url));
  }
}
