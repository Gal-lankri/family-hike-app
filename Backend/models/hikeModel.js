import pool from "../config/db.js";

async function getAllHikes() {
  const [rows] = await pool.query("SELECT * FROM hikes");
  return rows;
}

// Function to get a hike by ID
async function getHikeById(id) {
  const [rows] = await pool.query("SELECT * FROM hikes WHERE id = ?", [id]);
  return rows[0];
}

export default {
  getAllHikes,
  getHikeById,
};
