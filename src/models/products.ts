import { db } from "@/db";
import { products, products_category } from "@/db/schema";
import { eq, gte, lte } from "drizzle-orm";

export async function createProduct(data: typeof products.$inferInsert) {
  return await db.insert(products).values(data).returning();
}

export async function getAllProducts(
  limit: number = 10,
  offset: number = 0,
  categoryId?: number,
  minPrice?: number,
  maxPrice?: number
) {
  let query = db.select().from(products).$dynamic();

  if (categoryId) {
    query = query.where(eq(products.categoryId, categoryId));
  }

  if (minPrice) {
    query = query.where(gte(products.price, minPrice));
  }

  if (maxPrice) {
    query = query.where(lte(products.price, maxPrice));
  }

  return await query.limit(limit).offset(offset).all();
}

export async function getLatestProducts() {
  return await db
    .select({
      id: products.id,
      name: products.name,
      category: products_category.name,
      slug: products.slug,
      price: products.price,
      imageUrl: products.imageUrl,
    })
    .from(products)
    .innerJoin(products_category, eq(products.categoryId, products_category.id))
    .limit(4);
}

export async function getProductBySlug(slug: string) {
  return await db.select().from(products).where(eq(products.slug, slug));
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
