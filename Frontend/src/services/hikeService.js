import http from "./httpService";

const HIKES_API_URL = '/hikes';

export const hikeService = {
    getHikes,
    getHikeById,
    getHikeFromAi
};
/**
 * Hike Service
 * This service provides methods to interact with the hikes API.
 * It includes methods to fetch all hikes and a specific hike by ID.
 */
async function getHikes(filter = {}) {
    // If filter is provided, append it to the URL
    try {
        const response = await http.get(HIKES_API_URL, filter);
        return response.data;
    } catch (error) {
        console.error('Error fetching hikes:', error);
        throw error;
    }
}

async function getHikeById(id) {
    try {
        const response = await http.get(`${HIKES_API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching hike with ID ${id}:`, error);
        throw error;
    }
}

async function getHikeFromAi(prompt) {
    try {
        const response = await http.post(`${HIKES_API_URL}/ai`, { prompt });
        return response.data;
    } catch (error) {
        console.error('Error fetching hike from AI:', error);
        throw error;
    }
    
}