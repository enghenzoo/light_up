import { db } from "@/db";
import { products_category } from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export async function createCategory(name: string) {
  return await db.insert(products_category).values({ name });
}

export async function getAllCategories() {
  return await db
    .select({
      id: products_category.id,
      name: products_category.name,
      description: products_category.description,
      image: products_category.image,
      productCount: sql`(
        SELECT COUNT(*)
        FROM products
        WHERE products.category_id = ${products_category.id}
      )`,
    })
    .from(products_category)
    .all();
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
