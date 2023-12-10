import Phaser from "phaser";
export default class GameScene extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.image("ball", "../public/assets/ball.png");
    this.load.image("paddle", "../public/assets/paddle.png");
  }

  create() {
    const ball = this.physics.add.sprite(
      this.physics.world.bounds.width / 2,
      this.physics.world.bounds.height / 2,
      "ball"
    );

    const player1 = this.physics.add.sprite(
      this.physics.world.bounds.width - (ball.body.width / 2 + 1),
      this.physics.world.bounds.height / 2,
      "paddle"
    );
    const player2 = this.physics.add.sprite(
      ball.body.width / 3,
      this.physics.world.bounds.height / 2,
      "paddle"
    );
  }
}
