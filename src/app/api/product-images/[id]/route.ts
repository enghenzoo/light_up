import { NextResponse } from "next/server";
import { deleteImage } from "@/models/product-images";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteImage(Number(params.id));
    return NextResponse.json({ message: "Product image deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete product image" },
      { status: 500 }
    );
  }
}
