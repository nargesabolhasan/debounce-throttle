import "./App.css";
import React from "react";
import DebounceAndThrottle from "./component/Debounce";
import Portal from "./component/Portal/Portal";
import PortalForModal from "./component/Portal/PortalForModal";

function App() {
  return (
    <div className="App">
      {/* <DebounceAndThrottle/> */}
      <Portal/>
      {/* <PortalForModal/> */}
    </div>
  );
}

export default App;
