import "./App.css";
import Game from "./components/Game.js";
import { GameProvider } from "./contexts/GameContext.js";
const App = () => (
  <GameProvider>
    <Game />
  </GameProvider>
);

export default App;
