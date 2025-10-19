import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "./schema";
import dotenv from "dotenv";
dotenv.config();

const client = createClient({
  url: "file:./src/db/light_up.db",
});

export const db = drizzle(client, { schema });
