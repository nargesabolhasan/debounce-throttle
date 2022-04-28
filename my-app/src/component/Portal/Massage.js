import React, { useEffect } from "react";
import  ReactDom from "react-dom";

const Massage = ({ show, children }) => {
  if (!show) {
    return null;
  } else {
    return ReactDom.createPortal(
        <div>
          {children.map((m) => (
            <p className="massage" key={m.id}>
              {m.desc}
            </p>
          ))}
        </div>,
      document.getElementById("moon")
    );
  }
};

export default Massage;
