// /Row.jsx

import Tile from "./Tile.jsx";

const Row = ({ guess = "", status = [], shake }) => {
  return (
    <div className={`row-module ${shake ? "shake" : ""}`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const letter = guess[i] || "";
        const tileStatus = status[i] || "";
        return (
          <Tile
            key={`${guess}-${i}`}
            letter={letter}
            tileStatus={tileStatus}
            index={i}
          />
        );
      })}
    </div>
  );
};

export default Row;
