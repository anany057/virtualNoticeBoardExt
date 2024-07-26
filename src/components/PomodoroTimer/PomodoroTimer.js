import React, { useState, useEffect } from 'react';
import "../Widget.css";
import './PomodoroTimer.css';


const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorkSession, setIsWorkSession] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            setIsWorkSession(!isWorkSession);
            setMinutes(isWorkSession ? 5 : 25);
            setSeconds(0);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, minutes, isWorkSession]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(25);
    setSeconds(0);
    setIsWorkSession(true);
  };

  return (
    <div className="widget pomodoro-timer">
      <div className='pheading'>
      <h2><i className="widget-icon">&#x23F1;</i> {isWorkSession ? 'Work Session' : 'Break Session'}</h2>
      </div>
      <div className="time">
        {`${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}
      </div>
      <button onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
