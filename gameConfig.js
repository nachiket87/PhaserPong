import GameScene from "./game/gameScene.js";
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: "game",
  width: 800,
  height: 640,
  scene: GameScene,
  physics: {
    default: "arcade",
    arcade: {
      gravity: false,
    },
  },
};

export default new Phaser.Game(config);
