import { NextResponse } from "next/server";
import { updateAdmin, deleteAdmin } from "@/models/admins";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const updated = await updateAdmin(Number(params.id), body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to update admin" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await deleteAdmin(Number(params.id));
    return NextResponse.json({ message: "Admin deleted" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to delete admin" },
      { status: 500 }
    );
  }
}
