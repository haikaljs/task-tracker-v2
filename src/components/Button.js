export default function Button({ color, text, onClick }) {
  return (
    <div onClick={onClick} style={{ backgroundColor: color }} className="btn">
      {text}
    </div>
  );
}
