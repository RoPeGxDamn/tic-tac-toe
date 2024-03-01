export default function Square({ value, onClick }) {
  return (
    <button className={value && 'victory-square'} onClick={onClick}>
      {value}
    </button>
  );
}
