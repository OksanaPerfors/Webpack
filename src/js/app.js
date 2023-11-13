const game = new Game();
game.start();
import Game { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from "app.js";

import sum from "./basic";

console.log("app worked");

console.log(sum([1, 2]));
