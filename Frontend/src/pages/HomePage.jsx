import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="bg-primary flex flex-1 flex-col w-full p-10">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Plan the Perfect Hike</h1>
        <p>Find the perfect nature trips for your family — age-based, accessible, and fun.</p>
      </header>
      <main>
        <section className="flex flex-col items-center gap-4">
          <h2>Plan your next hike in 3 easy steps:</h2>
          <ul className="list-disc list-inside">
            <li>Choose a destination</li>
            <li>Select your hiking level</li>
            <li>Get personalized recommendations</li>
          </ul>
        </section>
        </main>
         <section className="text-center mt-auto">
      <Link
        to="/hikes"
        className="inline-block rounded-full bg-green-600 px-6 py-2 text-white font-medium
                   transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        Find a hike
      </Link>
    </section>
    </div>
  );
};

export default HomePage;