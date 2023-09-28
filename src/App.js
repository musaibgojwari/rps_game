import React, { useState } from "react";
import Play from "./components/Play";
import Footer from "./components/Footer";
import Game from "./components/Game";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Header from "./components/Header";

export default function App() {
  const [myChoice, setmyChoice] = useState("s")
  const [score, setScore] = useState(0)
  return (
    <>
      <Router>
        <div className="container">
          <Header score={score} />
          <Routes>
            <Route path="/" element={<Play setmyChoice={setmyChoice}/>} />
            <Route path="/game" element={<Game myChoice={myChoice} score={score} setScore={setScore} />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}
