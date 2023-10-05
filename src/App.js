import logo from "./logo.svg";
import { useState, useEffect } from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:3000/tasks");
    const data = await response.json();
    return data;
  };

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle task reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // add task
  const addTask = async (task) => {
    const response = await fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const data = await response.json();
    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 1000 + 1);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        setShowAddTask={() => setShowAddTask((prevState) => !prevState)}
        showAddTask={showAddTask}
      />

      {showAddTask && <AddTask addTask={addTask} />}

      {tasks && (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      )}
      {tasks.length === 0 && <p>No tasks to show</p>}
    </div>
  );
}

export default App;
