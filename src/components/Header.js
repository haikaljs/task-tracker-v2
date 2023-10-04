import Button from "./Button";

export default function Header({ title }) {
  return (
    <header className="header">
      <h1 style={headingStyle}>{title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
}

const headingStyle = {
  color: "purple",
};
