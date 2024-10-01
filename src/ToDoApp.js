import React, { useState } from 'react';

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');
  
    const handleAddTask = () => {
      if (taskInput.trim()) {
        setTasks([...tasks, taskInput]);
        setTaskInput(''); 
      }
    };
  
    const handleDeleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    return (
      <div>
        <h1>To-Do List</h1>
        <input 
          type="text" 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>

        {tasks.length > 0 ? (
        <ul>
          {tasks.map((task, index) => (
            <li key={index} style={{marginBottom: '10px'}}>
              {task} 
              <button onClick={() => handleDeleteTask(index)} style={{marginLeft: '10px'}}>Delete</button>
            </li>
          ))}
        </ul>
        ):  (
            <p>No tasks added yet.</p>
        )}
      </div>
    );
  }
  
  export default ToDoApp;
  