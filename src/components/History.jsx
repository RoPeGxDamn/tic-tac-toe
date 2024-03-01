export default function History({ history, jumpTo }) {
  return (
    <div className="game__history">
      <ul>
        {history.map((field, move) => {
          return (
            <li key={JSON.stringify(field)}>
              <button onClick={() => jumpTo(move)}>
                {move > 0 ? `Go to step #${move}` : `Start game`}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
