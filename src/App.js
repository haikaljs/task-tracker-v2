import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/Header";

function App() {
  const name = "Haikal";
  return (
    <div className="container">
      <Header title="Task Tracker" />
    </div>
  );
}

export default App;
