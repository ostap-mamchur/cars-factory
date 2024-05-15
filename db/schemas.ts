import { serial, integer } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const engines = pgTable("engines", {
  id: serial("id").primaryKey(),
});

export const bodies = pgTable("bodies", {
  id: serial("id").primaryKey(),
});

export const accessors = pgTable("accessors", {
  id: serial("id").primaryKey(),
});

export const cars = pgTable("cars", {
  id: serial("id").primaryKey(),
  bodyId: integer('body_id').references(() => bodies.id),
  engineId: integer('engine_id').references(() => engines.id),
  accessorId: integer('accessor_id').references(() => accessors.id),
});

export type EngineSchema = typeof engines;
export type BodySchema = typeof bodies;
export type AccessorSchema = typeof accessors;
export type CarSchema = typeof cars;

export type EngineEntity = typeof engines.$inferSelect;
export type BodyEntity = typeof bodies.$inferSelect;
export type AccessorEntity = typeof accessors.$inferSelect;
export type CarEntity = typeof cars.$inferSelect;