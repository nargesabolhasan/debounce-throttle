import React, { useState } from "react";
import Modal from "./Modal";
import "../../App.css";

let index = 0;

const Portal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="first-section">
        <button onClick={() => setShowModal(true)}>show toast massage</button>
        <Modal show={showModal} onclose={() =>setShowModal(false)}>
          Fancy Modal
        </Modal>
      </div>
      <div className="second-section">
          lorem ipsum dolor sit amet, consectetur
        </div>
    </>
  );
};

export default Portal;
