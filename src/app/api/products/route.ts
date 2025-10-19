import { NextResponse } from "next/server";
import {
  createProduct,
  getAllProducts,
  getLatestProducts,
} from "@/models/products";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const latest = searchParams.get("latest");
    let data;

    if (!latest) {
      data = await getAllProducts();
      return NextResponse.json(data);
    }

    data = await getLatestProducts();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const product = await createProduct(body);
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
