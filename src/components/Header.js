import Button from "./Button";

export default function Header({ title, setShowAddTask, showAddTask }) {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={setShowAddTask}
      />
    </header>
  );
}

const headingStyle = {
  color: "purple",
};
