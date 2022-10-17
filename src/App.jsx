import React from "react";
import Navbar from "./components/Navbar.jsx";
import HomeContent from "./components/HomeContent.jsx";
import "./Style.scss";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import White from "./components/White.jsx";
export default function App() {
  return (
    <div>
      <div className="Bg">
        <div>
          <HomeContent />
        </div>
      </div>
      <White />
      <div className="Bg">
        <About />
      </div>

      <div>
        <Skills />
      </div>
    </div>
  );
}
