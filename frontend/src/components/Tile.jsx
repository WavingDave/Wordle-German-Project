// /Tile.jsx
import { useEffect, useState } from "react";

const Tile = ({ letter, tileStatus, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (tileStatus) {
      const timer = setTimeout(() => {
        setIsFlipped(true);
      }, index * 150); // schneller & natürlicher

      return () => clearTimeout(timer);
    }
  }, [tileStatus, index]);

  return (
    <div className={`tile ${isFlipped ? "flip" : ""}`}>
      <div className="tile-inner">
        <div className="tile-front">{letter}</div>

        <div className={`tile-back tile-${tileStatus}`}>{letter}</div>
      </div>
    </div>
  );
};

export default Tile;
