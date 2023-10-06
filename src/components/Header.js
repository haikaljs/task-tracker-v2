import Button from "./Button";
import { useLocation } from "react-router-dom";

export default function Header({ title, setShowAddTask, showAddTask }) {
  const location = useLocation();
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={setShowAddTask}
        />
      )}
    </header>
  );
}

const headingStyle = {
  color: "purple",
};
