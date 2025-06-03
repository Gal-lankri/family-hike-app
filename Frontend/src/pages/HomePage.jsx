
const HomePage = () => {
  return (
    <div className="bg-primary grid grid-cols-1 gap-20 p-4">
      <header className="text-center">
        <h1 className="font-bold text-4xl">Plan the Perfect Hike</h1>
        <p>Find the perfect nature trips for your family — age-based, accessible, and fun.</p>
      </header>
      <main>
        <section>
          <h2>Plan your next hike in 3 easy steps:</h2>
          <ul>
            <li>Choose a destination</li>
            <li>Select your hiking level</li>
            <li>Get personalized recommendations</li>
          </ul>
        </section>
        </main>
        <section className="text-center">
          <button className="bg-green-700 text-white py-1.5 px-5 rounded-4xl hover:bg-green-800">
            <a href="/hikes">Find a hike</a>  
          </button>
        </section>
    </div>
  );
};

export default HomePage;