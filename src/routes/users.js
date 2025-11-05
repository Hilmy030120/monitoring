import express from "express";
import { query } from "../db.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const { rows } = await query("SELECT * FROM ... ORDER BY id ASC");
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

// Get one user
router.get("/:id", async (req, res) => {
  try {
    const { rows } = await query("SELECT * FROM ... WHERE id = $1", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: "User not found" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

export default router;