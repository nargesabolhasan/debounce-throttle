import React, { useState } from "react";
import "../../App.css";
import Massage from "./Massage";

let index = 0;

const Portal = () => {
  const [showMassage, setShowMassage] = useState(false);
  const [arrayOfMassages, setArrayOfMassages] = useState([]);
  let arr = ["hello", "world", "sample"];

  const handleClick = () => {
    const id = Date.now();
    setShowMassage(true)
    setArrayOfMassages([
      ...arrayOfMassages,
      {
        desc: "sample " + index++,
        id,
      },
    ]);
    setTimeout(() => {
      setArrayOfMassages((currentMessages) => {
        const targetIndex = currentMessages.findIndex((i) => i.id === id);
        const newMessages = [...currentMessages];
        newMessages.splice(targetIndex, 1);
        return newMessages;
      });
    }, 2000);
  };

  return (
    <>
      <div className="first-section">
        <button onClick={handleClick}>show toast massage</button>
        <Massage children={arrayOfMassages} show={showMassage}/>
      </div>
    </>
  );
};

export default Portal;

{
  /* <div className="second-section">
        lorem ipsum dolor sit amet, consectetur
      </div> */
}

{
  /* <Modal show={showModal} onclose={() => setShowModal(false)}>
          Fancy Modal
        </Modal> */
}


