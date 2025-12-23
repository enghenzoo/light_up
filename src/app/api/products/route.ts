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
    const limit = searchParams.get("limit");
    const offset = searchParams.get("offset");
    const categoryId = searchParams.get("categoryId");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    let data;

    if (latest) {
      data = await getLatestProducts();
    } else {
      data = await getAllProducts(
        limit ? Number(limit) : undefined,
        offset ? Number(offset) : undefined,
        categoryId ? Number(categoryId) : undefined,
        minPrice ? Number(minPrice) : undefined,
        maxPrice ? Number(maxPrice) : undefined
      );
    }
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
