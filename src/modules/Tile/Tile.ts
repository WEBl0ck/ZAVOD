import initPhaser from 'phaser';

class Tile extends Phaser.GameObjects.Sprite {
  constructor(scene: any, x: number, y: number, key: string) {
    super(scene, x, y, key);
    this.scene = scene;
    this.scene.add.existing(this);
    this.setOrigin(0);
  }
}

export default Tile;
