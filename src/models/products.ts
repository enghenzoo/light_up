import { db } from "@/db";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createProduct(data: typeof products.$inferInsert) {
  return await db.insert(products).values(data).returning();
}

export async function getAllProducts() {
  return await db.select().from(products).all();
}

export async function getProductBySlug(slug: string) {
  return await db.select().from(products).where(eq(products.slug, slug)).get();
}

export async function getProductByCategory(category: number) {
  return await db
    .select()
    .from(products)
    .where(eq(products.categoryId, category));
}

export async function updateProduct(
  id: number,
  data: Partial<typeof products.$inferInsert>
) {
  return await db
    .update(products)
    .set(data)
    .where(eq(products.id, id))
    .returning();
}

export async function deleteProduct(id: number) {
  return await db.delete(products).where(eq(products.id, id));
}
