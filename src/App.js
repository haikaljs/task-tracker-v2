import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const name = "Haikal";
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks />
    </div>
  );
}

export default App;
