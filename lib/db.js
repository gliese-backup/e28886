// Database Setup
import { Database } from "bun:sqlite";

export const db = new Database("database.db");

db.exec("PRAGMA journal_mode = WAL;"); // Performance

const createTables = db.transaction(() => {
  // Create users table
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username STRING NOT NULL UNIQUE,
        password STRING NOT NULL
    )
    `
  ).run();

  // Create papers table
  db.prepare(
    `CREATE TABLE IF NOT EXISTS papers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        createdDate TEXT,
        title STRING NOT NULL,
        body STRING NOT NULL,
        authorid INTEGER,
        FOREIGN KEY (authorid) REFERENCES users (id)
    )`
  ).run();
});

createTables();
