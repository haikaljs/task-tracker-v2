import Task from "./Task";

export default function Tasks({ tasks, deleteTask, toggleReminder }) {
  return (
    <>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
}
