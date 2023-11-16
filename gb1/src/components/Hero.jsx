// components/Hero.js

import React from "react";

const Hero = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover h-screen flex items-center justify-center "
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {}
    </div>
  );
};

export default Hero;
