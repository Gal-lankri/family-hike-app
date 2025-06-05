import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hikeService } from "../services/hikeService";

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
                <li
                  key={hike.id}
                >
              <Link to={`/hikes/${hike.id}`} className="text-lg border-2 block border-gray-300 p-4 rounded-lg w-full max-w-md hover:border-green-500 hover:shadow-md transition-all duration-200">
                  <h3 className="font-semibold">{hike.name}</h3>
                  <p className="text-sm text-gray-500">
                    {hike.location} · {hike.difficulty} · {hike.length_km} km
                  </p>
              </Link>
                </li>
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
