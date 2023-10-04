import Button from "./Button";

export default function Header({ title }) {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="green" text="Add" onClick={handleClick} />
    </header>
  );
}

const headingStyle = {
  color: "purple",
};
