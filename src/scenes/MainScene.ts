import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.image('sky', '/assets/images/sky.png');

    this.load.spritesheet('sprWater', '/assets/tiles/sprWater.png', {
      frameWidth: 16,
      frameHeight: 16,
    });
    this.load.image('sprSand', '/assets/tiles/sprSand.png');
    this.load.image('sprGrass', '/assets/tiles/sprGrass.png');
  }

  create() {
    // BULLSHIT ZONE
    this.add.image(400, 400, 'sky');
    // CAMERA ZONE

    this.cameras.main.setBounds(0, 0, 1920, 1080);
    this.cameras.main.setViewport(500, 0, 900, 700);

    this.cameras.main.setZoom(1);
    this.cameras.main.centerOn(0, 0);

    this.input.on('pointermove', (p: any) => {
      if (!p.isDown) return;

      this.cameras.main.scrollX -= (p.x - p.prevPosition.x) / this.cameras.main.zoom;
      this.cameras.main.scrollY -= (p.y - p.prevPosition.y) / this.cameras.main.zoom;
    });

    this.input.on('wheel', ({ deltaX, deltaY }: any) => {
      if (deltaY > 0) {
        var newZoom = this.cameras.main.zoom - 0.1;
        if (newZoom > 0.3) {
          this.cameras.main.setZoom(newZoom);
        }
      }

      if (deltaY < 0) {
        var newZoom = this.cameras.main.zoom + 0.1;
        if (newZoom < 1.3) {
          this.cameras.main.setZoom(newZoom);
        }
      }
    });
  }
}
export default MainScene;
