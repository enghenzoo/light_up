import { NextResponse } from "next/server";
import { addProductImage, getImagesByProduct } from "@/models/product-images";

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

    const images = await getImagesByProduct(Number(productId));
    return NextResponse.json(images);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch product images" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const image = await addProductImage(body);
    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to add product image" },
      { status: 500 }
    );
  }
}
