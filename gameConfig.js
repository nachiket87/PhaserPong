import GameScene from "./game/gameScene.js";
import Phaser from "phaser";
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#304858",
  scene: GameScene,
};

export default new Phaser.Game(config);
