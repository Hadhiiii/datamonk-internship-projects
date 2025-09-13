// backend/db.js
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./db.sqlite", (err) => {
  if (err) console.error("❌ Error opening database:", err);
  else {
    db.run(`CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      task TEXT NOT NULL,
      completed INTEGER DEFAULT 0
    )`);
    console.log("✅ Connected to SQLite and todos table ready.");
  }
});

module.exports = db;
