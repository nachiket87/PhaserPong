import Phaser from "phaser";
export default class GameScene extends Phaser.Scene {
  constructor() {
    super();
    this.ball;
    this.isGameStarted = false;
    this.cursors;
    this.player1;
    this.player2;
    this.keys = {};
  }

  preload() {
    this.load.image("ball", "../public/assets/ball.png");
    this.load.image("paddle", "../public/assets/paddle.png");
  }

  create() {
    this.ball = this.physics.add.sprite(
      this.physics.world.bounds.width / 2,
      this.physics.world.bounds.height / 2,
      "ball"
    );

    this.ball.setCollideWorldBounds(true);
    this.ball.setBounce(1, 1);

    this.player1 = this.physics.add.sprite(
      this.physics.world.bounds.width - (this.ball.body.width / 2 + 1),
      this.physics.world.bounds.height / 2,
      "paddle"
    );
    this.player2 = this.physics.add.sprite(
      this.ball.body.width / 3,
      this.physics.world.bounds.height / 2,
      "paddle"
    );

    this.player1.setImmovable();
    this.player2.setImmovable();

    this.cursors = this.input.keyboard.createCursorKeys();
    this.keys.w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keys.s = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    this.physics.add.collider(this.ball, this.player1);
    this.physics.add.collider(this.ball, this.player2);
    this.player1.setCollideWorldBounds(true);
    this.player2.setCollideWorldBounds(true);
  }

  update() {
    if (!this.isGameStarted) {
      const initialVelocityX = 100;
      const initialVelocityY = 100;
      this.ball.setVelocityX(initialVelocityX);
      this.ball.setVelocityY(initialVelocityY);
      this.isGameStarted = true;
    }
    this.player1.setVelocity(0);
    this.player2.setVelocity(0);

    if (this.cursors.up.isDown) {
      this.player1.body.setVelocityY(-350);
    }
    if (this.cursors.down.isDown) {
      this.player1.body.setVelocityY(350);
    }

    if (this.keys.w.isDown) {
      this.player2.body.setVelocityY(-350);
    }
    if (this.keys.s.isDown) {
      this.player2.body.setVelocityY(350);
    }

    if (this.ball.body.velocity.y > 350) {
      this.ball.setVelocity(350);
    }
    if (this.ball.body.velocity.y < -350) {
      this.ball.setVelocity(-350);
    }

    if (this.ball.body.x > this.player1.body.x) {
      console.log("player 2 wins");
      this.ball.setVelocityX(0);
      this.ball.setVelocityY(0);
      this.isGameStarted = false;
    }

    if (this.ball.body.x < this.player2.body.x) {
      console.log("player 1 wins");
      this.ball.setVelocityX(0);
      this.isGameStarted = false;
      this.ball.setVelocityY(0);
    }
  }
}
