// backend/server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

// CREATE
app.post("/todos", (req, res) => {
  const { task } = req.body;
  db.run("INSERT INTO todos (task) VALUES (?)", [task], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, task, completed: 0 });
  });
});

// READ
app.get("/todos", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// UPDATE
app.put("/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  db.run(
    "UPDATE todos SET task = ?, completed = ? WHERE id = ?",
    [task, completed, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ updatedID: id });
    }
  );
});

// DELETE
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM todos WHERE id = ?", [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deletedID: id });
  });
});

app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
app.get("/todos", (req, res) => {
  db.all("SELECT * FROM todos", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.listen(5000, () => console.log("🚀 Backend running on http://localhost:5000"));
