import logo from "./logo.svg";
import { useState } from "react";

// styles
import "./App.css";

// components
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
const [tasks, setTasks] = useState( [
  {
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
])
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
