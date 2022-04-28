import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="header">
      <div>
        <Link to="DebounceAndThrottle">DebounceAndThrottle</Link>
      </div>
      <div>
        <Link to="Portal">Portal</Link>
      </div>

      <div>
        <Link to="PortalForModal">PortalForModal</Link>
      </div>
    </div>
  );
};

export default Home;
