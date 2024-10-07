CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE IF NOT EXISTS "resources" (
	"content" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"id" varchar(191) PRIMARY KEY NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
