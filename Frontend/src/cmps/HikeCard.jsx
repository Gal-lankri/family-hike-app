import { Link } from "react-router-dom"

function HikeCard({ hike }) {
  return (
    <li key={hike.id}>
         <Link 
        to={`/hikes/${hike.id}`} 
        className="text-lg border-2 block border-gray-300 p-4 rounded-lg w-full max-w-md hover:border-green-500 hover:shadow-md transition-all duration-200"
      >
        <h3 className="font-semibold">{hike.name}</h3>
        <p className="text-sm text-gray-500">
          {hike.location} · {hike.difficulty} · {hike.length_km} km
        </p>
        
        {/* You could add more details here */}
        {hike.description && (
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {hike.description}
          </p>
        )}
        
        {hike.duration && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
            {hike.duration}
          </span>
        )}
      </Link>
    </li>
  )
}

export default HikeCard