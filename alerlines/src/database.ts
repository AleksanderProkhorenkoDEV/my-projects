import { Kysely, PostgresDialect } from "kysely";
import { Database } from "./types"; // this is the Database interface we defined earlier
import { Pool } from "pg";

const dialect = new PostgresDialect({
  pool: new Pool({
    user: "postgres",
    password: "1",
    host: "localhost",
    port: 5434,
    database: "alerline",
    max: 10,
  }),
});

// Database interface is passed to Kysely's constructor, and from now on, Kysely
// knows your database structure.
// Dialect is passed to Kysely's constructor, and from now on, Kysely knows how
// to communicate with your database.
export const db = new Kysely<Database>({
  dialect,
});
