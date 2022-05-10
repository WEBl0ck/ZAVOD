import Phaser from 'phaser'

import Chunk, { IChunk } from '../modules/Chunk/Chunk'

import { store } from '../store/store'

export interface IMainScene extends Phaser.Scene {
  chunkSize: number
  tileSize: number
}
class MainScene extends Phaser.Scene implements IMainScene {
  private chunks: IChunk[] = []

  readonly chunkSize = 16
  readonly tileSize = 16

  private keyW: Phaser.Input.Keyboard.Key | any = null
  private keyS: Phaser.Input.Keyboard.Key | any = null
  private keyA: Phaser.Input.Keyboard.Key | any = null
  private keyD: Phaser.Input.Keyboard.Key | any = null

  private player: Phaser.Physics.Arcade.Sprite | any = null

  private minimap: any = null

  private counter: number = 0

  constructor() {
    super('MainScene')
  }

  preload() {
    this.load.spritesheet('sprWater', '/assets/tiles/sprWater.png', {
      frameWidth: 16,
      frameHeight: 16,
    })
    this.load.image('sprSand', '/assets/tiles/sprSand.png')
    this.load.image('sprGrass', '/assets/tiles/sprGrass.png')

    this.load.image('sprWhiteTile', '/assets/tiles/bright.png')
    this.load.image('sprBlackTile', '/assets/tiles/dark.png')

    this.load.image('sprKnight', '/assets/tiles/knight.png')
  }

  create() {
    // BULLSHIT ZONE
    this.anims.create({
      key: 'sprWater',
      frames: this.anims.generateFrameNumbers('sprWater', {}),
      frameRate: 5,
      repeat: -1,
    })

    this.player = this.physics.add.sprite(this.scale.width * 0.5, this.scale.height * 0.5, 'sprKnight')
    this.player.setDepth(1)

    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    this.input.on('pointerdown', () => {
      console.log(this.chunks)

      const chunk = this.getChunk(3, 2)

      console.log(chunk, '<< chunk')
    })

    store.subscribe(() => {
      this.counter = store.getState().counter.value
    })

    // CAMERA ZONE
    // this.cameras.main.setBounds(0, 0, 1920, 1080);
    // this.cameras.main.setViewport(500, 0, 900, 700);
    this.cameras.main.setZoom(2)

    this.input.on('wheel', ({ deltaX, deltaY }: any) => {
      if (deltaY > 0) {
        let newZoom = this.cameras.main.zoom - 0.1
        if (newZoom > 0.5) {
          this.cameras.main.setZoom(newZoom)
        }
      }

      if (deltaY < 0) {
        let newZoom = this.cameras.main.zoom + 0.1
        if (newZoom < 2) {
          this.cameras.main.setZoom(newZoom)
        }
      }
    })

    const { width } = this.scale
    this.minimap = this.cameras
      .add(width - 600, 0, 250, 300)
      .setZoom(0.2)
      .setName('mini')
    this.minimap.setBackgroundColor(0x002244)
  }

  getChunk(x: number, y: number) {
    let chunk = null
    for (let i = 0; i < this.chunks.length; i++) {
      if (this.chunks[i].x == x && this.chunks[i].y == y) {
        chunk = this.chunks[i]
      }
    }
    return chunk
  }

  update() {
    let snappedChunkX = this.chunkSize * this.tileSize * Math.round(this.player.x / (this.chunkSize * this.tileSize))
    let snappedChunkY = this.chunkSize * this.tileSize * Math.round(this.player.y / (this.chunkSize * this.tileSize))

    snappedChunkX = snappedChunkX / this.chunkSize / this.tileSize
    snappedChunkY = snappedChunkY / this.chunkSize / this.tileSize

    for (let x = snappedChunkX - 2; x < snappedChunkX + 2; x++) {
      for (let y = snappedChunkY - 2; y < snappedChunkY + 2; y++) {
        let existingChunk = this.getChunk(x, y)

        if (existingChunk == null) {
          let newChunk = new Chunk(this, x, y)
          this.chunks.push(newChunk)
        }
      }
    }

    for (let i = 0; i < this.chunks.length; i++) {
      let chunk = this.chunks[i]

      if (Phaser.Math.Distance.Between(snappedChunkX, snappedChunkY, chunk.x, chunk.y) < 3) {
        if (chunk !== null) {
          chunk.load()
        }
      } else {
        if (chunk !== null) {
          chunk.unload()
        }
      }
    }

    const speed = 200

    if (this.keyW.isDown) {
      this.player.setVelocity(0, -speed)
    } else if (this.keyS.isDown) {
      this.player.setVelocity(0, speed)
    } else if (this.keyA.isDown) {
      this.player.setVelocity(-speed, 0)
    } else if (this.keyD.isDown) {
      this.player.setVelocity(speed, 0)
    } else {
      this.player.setVelocity(0, 0)
    }

    this.cameras.main.startFollow(this.player, false, 0.01, 0.01)
    this.minimap.startFollow(this.player, false, 0.01, 0.01)
  }
}
export default MainScene
