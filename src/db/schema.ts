import { sqliteTable, integer, text, real } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password"),
  provider: text("provider").default("credentials"),
  providerId: text("provider_id"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const admins = sqliteTable("admins", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id")
    .notNull()
    .references(() => users.id),
  permissions: text("permissions").default("full"),
});

export const products_category = sqliteTable("categories", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull().unique(),
  description: text("description"),
  image: text("image"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const products = sqliteTable("products", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  imageUrl: text("image_url"),
  images:text("images", {mode: "json"}),
  price: real("price").notNull(),
  categoryId: integer("category_id").references(() => products_category.id),
  stockQuantity: integer("stock_quantity").default(0),
  isActive: integer("is_active", { mode: "boolean" }).default(true),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
  updatedAt: text("updated_at").default(sql`CURRENT_TIMESTAMP`),
});

export const stockMovements = sqliteTable("stock_movements", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  productId: integer("product_id").references(() => products.id),
  change: integer("change").notNull(),
  reason: text("reason").default("manual"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  totalAmount: real("total_amount").notNull(),
  status: text("status").default("pending"),
  paymentStatus: text("payment_status").default("unpaid"),
  paymentMethod: text("payment_method"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const orderItems = sqliteTable("order_items", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").references(() => orders.id),
  productId: integer("product_id").references(() => products.id),
  quantity: integer("quantity").notNull(),
  price: real("price").notNull(),
});

export const addresses = sqliteTable("addresses", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").references(() => users.id),
  fullName: text("full_name").notNull(),
  phone: text("phone"),
  street: text("street").notNull(),
  city: text("city").notNull(),
  state: text("state"),
  postalCode: text("postal_code"),
  country: text("country").default("Egypt"),
});

export const payments = sqliteTable("payments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  orderId: integer("order_id").references(() => orders.id),
  amount: real("amount").notNull(),
  method: text("method").notNull(), // e.g., card, cash, paypal
  status: text("status").default("pending"),
  transactionId: text("transaction_id"),
  createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});
