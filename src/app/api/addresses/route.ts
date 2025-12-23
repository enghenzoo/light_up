import { NextResponse } from "next/server";
import { createAddress, getUserAddresses } from "@/models/addresses";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const addresses = await getUserAddresses(Number(userId));
    return NextResponse.json(addresses);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch addresses" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const address = await createAddress(body);
    return NextResponse.json(address, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create address" },
      { status: 500 }
    );
  }
}
