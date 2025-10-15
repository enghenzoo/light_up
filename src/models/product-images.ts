import { db } from "@/db";
import { productImages } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function addProductImage(data: typeof productImages.$inferInsert) {
  return await db.insert(productImages).values(data).returning();
}

export async function getImagesByProduct(productId: number) {
  return await db
    .select()
    .from(productImages)
    .where(eq(productImages.productId, productId))
    .all();
}

export async function deleteImage(id: number) {
  return await db.delete(productImages).where(eq(productImages.id, id));
}
