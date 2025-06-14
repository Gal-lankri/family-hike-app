import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hikeService } from "../services/hikeService";
import HikeCard from "../cmps/HikeCard";

function HikesList() {
  const [hikes, setHikes] = useState([]);

  // Fetch hikes data using the hikeService
  useEffect(() => {
    const fetchHikes = async () => {
      try {
        setHikes(await hikeService.getHikes());
        console.log("Fetched hikes:", hikes);
      } catch (error) {
        console.error("Error fetching hikes:", error);
      }
    };
    fetchHikes();
  }, []);

  return (
    <div className="bg-primary flex flex-1 flex-col w-full p-10">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Hikes List</h1>
        <p>Explore our collection of amazing hikes.</p>
      </header>
      <section className="flex flex-col items-center gap-4">
        <h2>Available Hikes</h2>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hikes.map((hike) => (
            <HikeCard key={hike.id} hike={hike} />
          ))}
        </ul>
        {hikes.length === 0 && (
          <p className="text-gray-500">No hikes available at the moment.</p>
        )}
      </section>
    </div>
  );
}

export default HikesList;
