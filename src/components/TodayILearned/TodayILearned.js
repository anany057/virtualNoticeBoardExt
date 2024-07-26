import React, { useState } from 'react';
import './TodayILearned.css';
import '../Widget.css';

const TodayILearned = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '' && tasks.length < 10) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <div className="widget today-i-learned">
      <div className='tilheading'>
      <h2>
        <i className="widget-icon">&#x1F4DA;</i>Today I Learned
      </h2>
      </div>
      <br/>
      <div className='input-container'>
      <input
        type="text"
        value={task}
        onChange={handleInputChange}
        placeholder="Add what you learned today"
        disabled={tasks.length >= 10}
      />
      <button onClick={addTask} disabled={tasks.length >= 10}>
        Add
      </button>
      </div>
      {tasks.length >= 10 && (
        <p className="task-limit-message">You can only add up to 10 tasks.</p>
      )}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodayILearned;
