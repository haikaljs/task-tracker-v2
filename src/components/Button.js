export default function Button({ color, text }) {
  return (
    <div style={{ backgroundColor: color }} className="btn">
      {text}
    </div>
  );
}
