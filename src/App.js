import React from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
// Pass users array to the List component as a prop
export default function App() {
  return (
    <div>
      <Nav />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
