CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  username   TEXT NOT NULL,
  password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);

CREATE TABLE nutrition (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  category   TEXT NOT NULL,
  calories   INT,
  image_url  TEXT NOT NULL,
  user_id    INTEGER,
  created_at TIMESTAMP NOT NULL
);
