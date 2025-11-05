CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  provider TEXT NOT NULL,
  ping_time_utc TIMESTAMP DEFAULT now(),
  ping_time_wib TIMESTAMP DEFAULT now(),
  total_transmitter INTEGER,
  total_trx INTEGER
);