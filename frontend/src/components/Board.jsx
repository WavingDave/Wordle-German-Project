// /Board.jsx
import Row from "./Row.jsx";

const Board = ({ currentGuess, previousGuesses, errorMessage }) => {
  return (
    <div className="board">
      {Array.from({ length: 6 }).map((_, rowIndex) => {
        let guess = "";
        let status = [];

        if (rowIndex < previousGuesses.length) {
          guess = previousGuesses[rowIndex].guess;
          status = previousGuesses[rowIndex].status;
        } else if (rowIndex === previousGuesses.length) {
          guess = currentGuess;
          status = [];
        } else {
          guess = "";
          status = [];
        }

        return (
          <Row
            key={rowIndex}
            guess={guess}
            status={status}
            shake={!!errorMessage}
          />
        );
      })}
    </div>
  );
};
export default Board;
