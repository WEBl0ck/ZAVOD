import Phaser from 'phaser';

import { IMainScene } from '../../scenes/MainScene';

import Tile from '../Tile/Tile';

export interface IChunk {
  x: number;
  y: number;

  tiles: Phaser.GameObjects.Group;

  load: () => void;
  unload: () => void;
}
class Chunk implements IChunk {
  private scene;
  readonly tiles;

  private isLoaded;

  readonly x;
  readonly y;

  constructor(scene: IMainScene, x: number, y: number) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    this.tiles = this.scene.add.group();
    this.isLoaded = false;
  }

  public unload() {
    if (this.isLoaded) {
      this.tiles.clear(true, true);

      this.isLoaded = false;
    }
  }

  public load() {
    if (!this.isLoaded) {
      for (var x = 0; x < this.scene.chunkSize; x++) {
        for (var y = 0; y < this.scene.chunkSize; y++) {
          var tileX = this.x * (this.scene.chunkSize * this.scene.tileSize) + x * this.scene.tileSize;
          var tileY = this.y * (this.scene.chunkSize * this.scene.tileSize) + y * this.scene.tileSize;

          var key = '';
          var animationKey = '';

          if (x % 2 === y % 2) {
            key = 'sprWhiteTile';
          } else {
            key = 'sprBlackTile';
          }

          if (x == 8 && y == 8) {
            key = 'sprWater';
            animationKey = 'sprWater';
          }

          var tile = new Tile(this.scene, tileX, tileY, key);

          if (animationKey !== '') {
            tile.play(animationKey);
          }

          this.tiles.add(tile);
        }
      }

      this.isLoaded = true;
    }
  }
}

export default Chunk;
