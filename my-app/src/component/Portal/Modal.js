import React from "react";
import  ReactDom from "react-dom";
const Modal = ({ show, children, onclose }) => {
  if (!show) {
    return null;
  } else {
    return ReactDom.createPortal(
      <div className="overlay">
        <div className="modal">
          {children}
          <button onClick={() => onclose()}>close</button>
        </div>
      </div>,
       document.getElementById("moon")
    );
  }
};

export default Modal;
