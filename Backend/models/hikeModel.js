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

// Function to add a new hike
async function addHike(hike){
  const { name, location, distance, difficulty } = hike;
  const [result] = await pool.query(
    "INSERT INTO hikes (name, location, distance, difficulty) VALUES (?, ?, ?, ?)",
    [name, location, distance, difficulty]
  );
  return result.insertId
}

export default {
  getAllHikes,
  getHikeById,
  addHike
};
