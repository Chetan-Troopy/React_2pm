import React, { useRef, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => setTime(prev => prev + 1), 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  return (
    <div className="container mt-4">
      <h3 className="text-info">Stopwatch</h3>
      <h4>Time: {time}s</h4>
      <button className="btn btn-primary me-2" onClick={startTimer}>Start</button>
      <button className="btn btn-success me-2" onClick={stopTimer}>Stop</button>
      <button className="btn btn-secondary" onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;
