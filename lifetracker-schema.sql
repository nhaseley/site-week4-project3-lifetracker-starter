CREATE TABLE users (
  id         SERIAL PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE CHECK (position('@' IN email) > 1),
  username   TEXT NOT NULL,
  password   TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name  TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE nutrition (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  category   TEXT NOT NULL,
  calories   INT,
  quantity   INT,
  image_url  TEXT NOT NULL,
  user_id    INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sleep (
  id         SERIAL PRIMARY KEY,
  startTime  TEXT NOT NULL,
  endTime    TEXT NOT NULL,
  user_id    INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
CREATE TABLE exercise (
  id         SERIAL PRIMARY KEY,
  name        TEXT NOT NULL,
  category    TEXT NOT NULL,
  duration   INT,
  intensity  INT,
  user_id    INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- INSERT INTO users VALUES (1,'nylevenya@hotmail.com', 'nylevenya', '2003nyleve', 'nya', 'haseley', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
-- TABLE users to view this in terminal