import hikeModel from "../models/hikeModel.js";

// Function to get all hikes
async function getAllHikes(req, res) {
  try {
    const hikes = await hikeModel.getAllHikes();
    res.status(200).json(hikes);
  } catch (error) {
    console.error("Error fetching hikes:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// Function to get a hike by ID
async function getHikeById(req, res) {
  const { id } = req.params;
  try {
    const hike = await hikeModel.getHikeById(id);
    if (!hike) {
      return res.status(404).json({ message: "Hike not found" });
    }
    res.status(200).json(hike);
  } catch (error) {
    console.error("Error fetching hike:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default {
  getAllHikes,
  getHikeById,
};
