import React, { useState, useCallback } from "react";
import lodash from "lodash";
import { Link } from "react-router-dom";

function DebounceAndThrottle() {
  const [defaultCounter, setDefaultCounter] = useState(0);
  const [debounceCounter, setDebounceCounter] = useState(0);
  const [throttleCounter, setThrottleCounter] = useState(0);

  const simpleHandling = () => {
    setDefaultCounter((a) => a + 1);
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
    <>
    <div
      className="App"
      onMouseMove={handleMouseMove}
      style={{ width: "100vw", height: "80vh" }}
    >
      <h3>Default: {defaultCounter}</h3>
      <h3>Debounce: {debounceCounter}</h3>
      <h3>Throttle: {throttleCounter}</h3>
    </div>
    <Link to="/">back to home</Link>
    </>
  );
}

export default DebounceAndThrottle;

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