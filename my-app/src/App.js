import "./App.css";
import React, { useState, useCallback } from "react";
import lodash from "lodash";

function App() {
  const [defaultCounter, setDefaultCounter] = useState(0);
  const [debounceCounter, setDebounceCounter] = useState(0);
  const [throttleCounter, setThrottleCounter] = useState(0);

  const simpleHandling = () => {
    setDefaultCounter(defaultCounter + 1);
    console.log(defaultCounter);
  };

  const debounceHandling = useCallback(

    //---with lodash:------

    // lodash.debounce(() => {
    //   setDebounceCounter((a) => a + 1);
    // }, 1000),

    //---our debounce function::------
    debounce(() => {
      setDebounceCounter((a) => a + 1);
    }, 1000),
    []
  );

  const throttleHandling = useCallback(

    //---with lodash:------

    // lodash.throttle(() => {
    //   setThrottleCounter((a) => a + 1);
    // }, 1000),

    //---our throttle function:------
    throttle(() => {
      setThrottleCounter((a) => a + 1);
    }, 1000),
    []
  );

  const handleMouseMove = () => {
    simpleHandling();
    debounceHandling();
    throttleHandling();
  };

  return (
    <div
      className="App"
      onMouseMove={handleMouseMove}
      style={{ backgroundColor: "red", width: "100vw", height: "100vh" }}
    >
      <h3>Default: {defaultCounter}</h3>
      <h3>Debounce: {debounceCounter}</h3>
      <h3>Throttle: {throttleCounter}</h3>
    </div>
  );
}

export default App;

//debounce
function debounce(cb, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
//throttle
function throttle(cb, delay) {
  let shouldWait = false;
  let waitingArgs;

  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
