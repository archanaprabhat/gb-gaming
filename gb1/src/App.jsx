import { useState } from "react";
import "./components/Header";
import "./App.css";
import Header from "./components/Header";
import Marquee from "./components/Marquee";
import Hero from "./components/Hero";
import backgroundImage from "./assets/1.jpg";
import Combined from "./components/Combined";
function App() {
  return (
    <>
      <Header />
      <Marquee />
      <Hero backgroundImage={backgroundImage} />
      <Combined />
    </>
  );
}

export default App;
