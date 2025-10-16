import { db } from "@/db";
import { products_category } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createCategory(name: string) {
  return await db.insert(products_category).values({ name });
}

export async function getAllCategories() {
  return await db.select().from(products_category).all();
}

export async function updateCategory(
  id: number,
  data: Partial<typeof products_category.$inferInsert>
) {
  return await db
    .update(products_category)
    .set(data)
    .where(eq(products_category.id, id))
    .returning();
}

export async function deleteCategory(id: number) {
  return await db.delete(products_category).where(eq(products_category.id, id));
}
