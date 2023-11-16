import { useState } from "react";
import "./components/Header";
import "./App.css";
import Header from "./components/Header";
import Marquee from "./components/Marquee";

function App() {
  return (
    <>
      <Header />
      <Marquee />
    </>
  );
}

export default App;
