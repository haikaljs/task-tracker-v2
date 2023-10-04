const tasks = [
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
];

export default function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h1 key={task.id}>{task.title}</h1>
      ))}
    </>
  );
}
