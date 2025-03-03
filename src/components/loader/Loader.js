import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import "./Loader.css"

function Loader() {

  const loaderProps = {
    loading: true,
    size: 125,
    duration: 2,
    colors: ["grey", "#df4223", "black"],
  };

  return (
    <div className="loader">
        <GooeyCircleLoader {...loaderProps} />
    </div>
  );
}

export default Loader;