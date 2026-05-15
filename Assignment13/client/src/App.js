import React, { useEffect, useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch('http://YOUR_PUBLIC_IP:5000/api/tasks')
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const addTask = async () => {

    const response = await fetch('http://98.82.187.249:5000/api/tasks', {

      method: 'POST',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({ title })

    });

    const data = await response.json();

    setTasks([...tasks, data]);

    setTitle('');
  };

  const deleteTask = async (id) => {

    await fetch(`http://YOUR_PUBLIC_IP:5000/api/tasks/${id}`, {
      method: 'DELETE'
    });

    setTasks(tasks.filter((task) => task._id !== id));
  };

  return (

    <div className="container">

      <h1>Task Management System</h1>

      <div className="task-input">

        <input
          type="text"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={addTask}>
          Add Task
        </button>

      </div>

      <div className="tasks">

        {tasks.map((task) => (

          <div className="card" key={task._id}>

            <h2>{task.title}</h2>

            <button onClick={() => deleteTask(task._id)}>
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default App;
