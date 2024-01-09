import { useState } from "react";
import StartsGame from "./components/StartsGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [gameStarted, setGameStarted] = useState(true);

  const toggleGameStarted = () => {
    setGameStarted(!gameStarted);
  };

  return (
    <>
      {gameStarted ? (
        <StartsGame toggle={toggleGameStarted} />
      ) : (
        <GamePlay toggle={toggleGameStarted} />
      )}
    </>
  );
}
export default App;
