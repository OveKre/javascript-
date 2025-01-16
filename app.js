import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim()) {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <h1>To-Do List</h1>
            <div style={{ marginBottom: '10px' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                    style={{ padding: '10px', width: '70%' }}
                />
                <button onClick={addTask} style={{ padding: '10px' }}>
                    Add
                </button>
            </div>
            <ul style={{ padding: 0, listStyle: 'none' }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px',
                            padding: '10px',
                            background: task.completed ? '#d4edda' : '#f8d7da',
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
                            style={{ padding: '5px 10px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '3px' }}
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
