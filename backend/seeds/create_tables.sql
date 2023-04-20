DROP TABLE IF EXISTS tasks,
diaries,
users,
comments,
likes;

CREATE TABLE "tasks" (
  "id" serial PRIMARY KEY,
  "title" text,
  "content" text,
  "is_completed" boolean,
  "is_priority" boolean,
  "due_date" text,
  "createdAt" timestamp DEFAULT (now()),
  "user_id" int NOT NULL
);

CREATE TABLE "diaries" (
  "id" serial PRIMARY KEY,
  "title" text,
  "content" text,
  "views" int,
  "createdAt" timestamp DEFAULT (now()),
  "user_id" int NOT NULL,
  "is_public" boolean DEFAULT false
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "email" text UNIQUE NOT NULL,
  "username" text UNIQUE NOT NULL,
  "password" text NOT NULL
);

CREATE TABLE "comments" (
  "id" serial PRIMARY KEY,
  "diary_id" int,
  "user_id" int NOT NULL,
  "content" text,
  "createdAt" timestamp DEFAULT (now())
);

CREATE TABLE "likes" (
  "id" serial PRIMARY KEY,
  "diary_id" int,
  "user_id" int NOT NULL
);

ALTER TABLE
  "tasks"
ADD
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
  "diaries"
ADD
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
  "comments"
ADD
  FOREIGN KEY ("diary_id") REFERENCES "diaries" ("id") ON DELETE CASCADE;

ALTER TABLE
  "comments"
ADD
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;

ALTER TABLE
  "likes"
ADD
  FOREIGN KEY ("diary_id") REFERENCES "diaries" ("id") ON DELETE CASCADE;

ALTER TABLE
  "likes"
ADD
  FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE;