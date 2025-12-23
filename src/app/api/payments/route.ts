import { NextResponse } from "next/server";
import { createPayment, getPaymentsByOrder } from "@/models/payments";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const orderId = searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json(
        { error: "Order ID is required" },
        { status: 400 }
      );
    }

    const payments = await getPaymentsByOrder(Number(orderId));
    return NextResponse.json(payments);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch payments" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const payment = await createPayment(body);
    return NextResponse.json(payment, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create payment" },
      { status: 500 }
    );
  }
}
