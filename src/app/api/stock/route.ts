import { NextResponse } from "next/server";
import { addStock, getStockHistory } from "@/models/stock";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    const stockHistory = await getStockHistory(Number(productId));
    return NextResponse.json(stockHistory);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch stock history" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { productId, change, reason } = body;
    if (!productId || !change) {
      return NextResponse.json(
        { error: "Product ID and change are required" },
        { status: 400 }
      );
    }
    await addStock(productId, change, reason);
    return NextResponse.json({ message: "Stock updated" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update stock" },
      { status: 500 }
    );
  }
}
