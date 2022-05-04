import { IMainScene } from '../../scenes/MainScene';

export interface IPlayer {
  playerSprite: Phaser.GameObjects.Sprite;
}

class Player implements IPlayer {
  public playerSprite;

  constructor(scene: IMainScene, x: number, y: number) {
    this.playerSprite = scene.add.sprite(500, 500, 'player');
  }
}
