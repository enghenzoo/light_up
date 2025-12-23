import { NextResponse } from "next/server";
import { createAdmin, getAllAdmins } from "@/models/admins";

export async function GET() {
  try {
    const admins = await getAllAdmins();
    return NextResponse.json(admins);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch admins" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, permissions } = body;
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    const admin = await createAdmin(userId, permissions);
    return NextResponse.json(admin, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create admin" },
      { status: 500 }
    );
  }
}
