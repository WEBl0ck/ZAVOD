import Phaser from 'phaser';

export const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#383838',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
};
