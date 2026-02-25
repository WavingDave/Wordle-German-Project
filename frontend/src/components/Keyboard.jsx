// Keyboard.jsx

const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

const Keyboard = ({ onKeyPress, keyboardStatus }) => {
  return (
    <div className="keyboard">
      {rows.map((row, i) => (
        <div key={i} className="keyboard-row">
          {i === 2 && (
            <button className="key special" onClick={() => onKeyPress("Enter")}>
              ENTER
            </button>
          )}

          {row.split("").map((letter) => (
            <button
              key={letter}
              className={`key key-${keyboardStatus[letter] || ""}`}
              onClick={() => onKeyPress(letter)}
            >
              {letter}
            </button>
          ))}

          {i === 2 && (
            <button
              className="key special"
              onClick={() => onKeyPress("Backspace")}
            >
              ⌫
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
