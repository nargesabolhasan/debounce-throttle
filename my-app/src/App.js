import "./App.css";
import React from "react";
import DebounceAndThrottle from "./component/Debounce";
import Home from "./component/Home";
import Portal from "./component/Portal/Portal";
import PortalForModal from "./component/Portal/PortalForModal";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DebounceAndThrottle" element={<DebounceAndThrottle />} />
        <Route path="Portal" element={<Portal />} />
        <Route path="PortalForModal" element={<PortalForModal />} />
      </Routes>
    </div>
  );
}

export default App;
