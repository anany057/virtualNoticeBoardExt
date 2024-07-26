import React, { useState, useEffect } from 'react';
import './GrowthChecklist.css';
import "../Widget.css";

const GrowthChecklist = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (task.trim() !== '' && tasks.length < 10) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <div className="widget todo-container">
      <div className='gcheading'>
      <h2>Daily Growth Checklist</h2>
      </div>
      <br/>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add today's tasks"
        />
        <button onClick={handleAddTask} disabled={tasks.length >= 10}>
          Add
        </button>
      </div>
      {tasks.length >= 10 && <p style={{ color: 'white' }}>You can only add up to 10 tasks.</p>}
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => handleToggleTask(index)}
            className={task.completed ? 'completed' : ''}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GrowthChecklist;
