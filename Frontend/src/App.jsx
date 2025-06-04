import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./cmps/navbar.jsx";
import HikesList from "./pages/HikesList.jsx";

function App() {
  return (
   <div className="min-h-screen flex flex-col">
      <Navbar/>

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/hikes" element={<HikesList/>} />
        </Routes>

    </div>
  );
}

export default App;
