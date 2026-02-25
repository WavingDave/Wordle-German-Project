import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Board from "./components/Board.jsx";
import Keyboard from "./components/Keyboard.jsx";

const App = () => {
  const [gameState, setGameState] = useState("playing");
  const [currentGuess, setCurrentGuess] = useState("");
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [solution, setSolution] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState({});

  const startNewGame = async () => {
    await fetch("http://localhost:3000/api/word");
  };

  const restartGame = () => {
    setGameState("playing");
    setCurrentGuess("");
    setPreviousGuesses([]);
    setErrorMessage("");
    setSolution("");
    startNewGame();
    setKeyboardStatus({});
  };

  const handleKey = useCallback(
    async (key) => {
      if (gameState !== "playing") {
        return { error: "Game is already finished" };
      }

      if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }

      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }

      if (key === "Enter") {
        if (currentGuess.length !== 5) {
          setErrorMessage("Word must be 5 letters long");
          setTimeout(() => setErrorMessage(""), 2000);
          return;
        }

        const response = await fetch("http://localhost:3000/api/guess", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ guess: currentGuess }),
        });

        const data = await response.json();
        console.log(data.solution);

        if (!data.valid) {
          setErrorMessage(data.message);
          setTimeout(() => setErrorMessage(""), 2000);
          return;
        }

        setPreviousGuesses((prev) => [
          ...prev,
          { guess: currentGuess.toUpperCase(), status: data.status },
        ]);

        const priority = {
          correct: 3,
          present: 2,
          absent: 1,
        };

        setKeyboardStatus((prev) => {
          const updated = { ...prev };

          data.status.forEach((state, i) => {
            const letter = currentGuess[i].toUpperCase();
            if (
              !updated[letter] ||
              priority[state] > priority[updated[letter]]
            ) {
              updated[letter] = state;
            }
          });
          return updated;
        });

        setGameState(data.gameState);

        if (data.gameState === "lost") {
          setSolution(data.solution);
        }

        setCurrentGuess("");
      }
    },
    [currentGuess, gameState],
  );

  useEffect(() => {
    startNewGame();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => handleKey(event.key);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKey]);

  return (
    <>
      <div className="board-div">
        <Board
          currentGuess={currentGuess}
          previousGuesses={previousGuesses}
          errorMessage={errorMessage}
        />
        <Keyboard onKeyPress={handleKey} keyboardStatus={keyboardStatus} />

        <div className="game-message">
          {/* {currentGuess && <p>Current Guess: {currentGuess}</p>} */}
          {gameState === "won" && <p>You won!</p>}
          {gameState === "lost" && <p>You lost! Solution: {solution}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <div className="admire-buttons">
            {gameState !== "playing" && (
              <button onClick={restartGame}>Restart</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
