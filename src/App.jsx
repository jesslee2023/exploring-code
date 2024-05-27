import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/osman/Hero";
import HalfOfPopulation from "./components/moysis/HalfOfPopulation";
import WaterAnimation from "./components/hifza/WaterFact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/hero">Hero</Link>
            </li>
            <li>
              <Link to="/half-population">Half of Population</Link>
            </li>
            <li>
              <Link to="/water-animation">Water Animation</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" />
          <Route path="/hero" element={<Hero />} />
          <Route path="/half-population" element={<HalfOfPopulation />} />
          <Route path="/water-animation" element={<WaterAnimation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
