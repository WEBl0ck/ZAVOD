import Phaser from 'phaser';

export const config = {
  type: Phaser.AUTO,
  backgroundColor: '#383838',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scale: {
    mode: Phaser.Scale.ENVELOP,
    parent: 'main',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1920,
    height: 1080,
  },
};
