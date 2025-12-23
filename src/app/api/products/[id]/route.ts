import { NextResponse, NextRequest } from "next/server";
import {
  getProductBySlug,
  updateProduct,
  deleteProduct,
} from "@/models/products";

export async function GET(
  _req: NextRequest,
  ctx: RouteContext<"/api/products/[id]">
) {
  try {
    const { id } = await ctx.params;
    const product = await getProductBySlug(id);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  ctx: RouteContext<"/api/products/[id]">
) {
  try {
    const { id } = await ctx.params;
    const body = await req.json();
    const updated = await updateProduct(Number(id), body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteProduct(Number(params.id));
    return NextResponse.json({ message: "Product deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
