import React from "react";
import "./App.css";
import BoxesHover from "./SplineComponents/BoxesHover.tsx";
import Hero1 from "./SubComponents/Hero1/index.tsx";
import Home1 from "./Components/Homes/Home1/index.tsx";
import Gallery1 from "./Components/Gallerys/Gallery1/index.tsx";
import Project1 from "./Components/Projects/Project1/index.tsx";

function App() {
  return (
    <div className="App">
      {/* <Gallery1 /> */}
      {/* <Home1 /> */}
      <Project1 />
    </div>
  );
}

export default App;
