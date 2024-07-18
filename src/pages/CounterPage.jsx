import React, { useState, useEffect } from 'react';
import './CounterPage.css';

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isIncrement, setIsIncrement] = useState(true);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCount(prevCount => isIncrement ? prevCount + 1 : prevCount - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, isIncrement]);

  const startIncrement = () => {
    setIsIncrement(true);
    setIsRunning(true);
  };

  const startDecrement = () => {
    setIsIncrement(false);
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  const resetCounter = () => {
    setIsRunning(false);
    setCount(0);
  };

  return (
    <div className="layout-container">
      <div className="layout-container__wrapper">
        <h1>Counter Page</h1>
        <div className="counter-display">
          {count}
        </div>
        <div className="counter-buttons">
          <button className="button increment-button" onClick={startIncrement} disabled={isRunning && isIncrement}>Increment</button>
          <button className="button decrement-button" onClick={startDecrement} disabled={isRunning && !isIncrement}>Decrement</button>
          <button className="button stop-button" onClick={stopCounter} disabled={!isRunning}>Stop</button>
          <button className="button reset-button" onClick={resetCounter}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
