import React, { useState } from 'react';

function App() {
  // State ülesannete jaoks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Funktsioon ülesande lisamiseks
  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask(''); // Tühjenda sisend
    }
  };

  // Funktsioon ülesande tehtuks märkimiseks
  const toggleTask = (id) => {
    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        )
    );
  };

  // Funktsioon ülesande kustutamiseks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
      <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
        <h1>To-Do List</h1>
        {/* Sisend uue ülesande lisamiseks */}
        <div style={{ marginBottom: '10px' }}>
          <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a task"
              style={{ padding: '10px', width: '70%' }}
          />
          <button onClick={addTask} style={{ padding: '10px' }}>
            Add
          </button>
        </div>
        {/* Ülesannete nimekiri */}
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {tasks.map((task) => (
              <li
                  key={task.id}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: task.completed ? '#d4edda' : '#f8d7da',
                    marginBottom: '10px',
                    padding: '10px',
                    borderRadius: '5px',
                  }}
              >
            <span
                onClick={() => toggleTask(task.id)}
                style={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  cursor: 'pointer',
                }}
            >
              {task.text}
            </span>
                <button
                    onClick={() => deleteTask(task.id)}
                    style={{
                      padding: '5px 10px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '3px',
                    }}
                >
                  Delete
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
