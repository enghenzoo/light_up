import { NextResponse } from "next/server";
import { updateCategory, deleteCategory } from "@/models/categories";
import { getProductByCategory } from "@/models/products";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const products = getProductByCategory(Number(params.id));
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch category" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const updated = await updateCategory(Number(params.id), body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update category" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteCategory(Number(params.id));
    return NextResponse.json({ message: "Category deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete category" },
      { status: 500 }
    );
  }
}
