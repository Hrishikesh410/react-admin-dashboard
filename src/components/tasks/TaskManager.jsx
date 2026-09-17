import React, { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React state",
      completed: true,
    },
    {
      id: 2,
      title: "Build product list",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");
  const addTask = (event) => {
    event.preventDefault();
    if (!newTask.trim()) {
      return;
    }

    const task = {
      id: Date.now(),
      title: newTask,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, task]);

    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prevTask) =>
      prevTask.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      }),
    );
  };
  return (
    <div>
      <section className="demo-section">
        <h2>Task Manager</h2>
        <form onSubmit={addTask}>
          <input
            value={newTask}
            onChange={(event) => setNewTask(event.target.value)}
            placeholder="Enter a Task"
          />
          <button type="submit">Add task</button>
        </form>

        <ul>
          {tasks.map((task) => {
            return (
              <li>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </span>
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default TaskManager;
