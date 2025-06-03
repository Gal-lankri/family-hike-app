import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./cmps/navbar.jsx";

function App() {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 border-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* More routes can go here */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
