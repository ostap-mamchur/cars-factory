import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql',
  schema: './db/schemas.ts',
  out: './db/migrations',
  dbCredentials: {
    url: 'postgres://myuser:mypassword@localhost:5432/mydatabase',
  },
  verbose: true,
  strict: true,
})