import {useEffect, useState} from 'react'
import { hikeService } from '../services/hikeService'

function HikesList() {
  const [hikes, setHikes] = useState([])

  // Fetch hikes data using the hikeService
  useEffect(() => {
    const fetchHikes = async () => {
      try {
        setHikes(await hikeService.getHikes())
        console.log('Fetched hikes:', hikes)
      } catch (error) {
        console.error('Error fetching hikes:', error)
      }
    }
    fetchHikes()
  }, [])


  return (
    <div className="bg-primary flex flex-1 flex-col w-full p-10">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Hikes List</h1>
        <p>Explore our collection of amazing hikes.</p>
      </header>
      <main>
        <section className="flex flex-col items-center gap-4">
          <h2>Available Hikes</h2>
          <ul className="list-disc list-inside">
            {hikes.map((hike) => (
              <li key={hike.id} className="text-lg">
                <a href={`/hikes/${hike.id}`} className="text-blue-500 hover:underline">
                  {hike.name}
                </a>
              </li>
            ))}
          </ul>
          {hikes.length === 0 && (
            <p className="text-gray-500">No hikes available at the moment.</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default HikesList