CREATE TABLE IF NOT EXISTS "accessors" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bodies" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "cars" (
	"id" serial PRIMARY KEY NOT NULL,
	"body_id" integer,
	"engine_id" integer,
	"accessor_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "engines" (
	"id" serial PRIMARY KEY NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cars" ADD CONSTRAINT "cars_body_id_bodies_id_fk" FOREIGN KEY ("body_id") REFERENCES "public"."bodies"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cars" ADD CONSTRAINT "cars_engine_id_engines_id_fk" FOREIGN KEY ("engine_id") REFERENCES "public"."engines"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "cars" ADD CONSTRAINT "cars_accessor_id_accessors_id_fk" FOREIGN KEY ("accessor_id") REFERENCES "public"."accessors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
