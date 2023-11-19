import React from "react";
import Cards from "./Cards";
import Aside from "./Aside";

function Combined() {
  return (
    <div className="flex">
      <div className="w-3/4">
        <Cards />
      </div>
      <div className="w-1/4">
        <Aside />
      </div>
    </div>
  );
}

export default Combined;
