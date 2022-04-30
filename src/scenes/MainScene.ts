import Phaser from 'phaser';
import { useDispatch, useSelector } from 'react-redux';

import { selectValue, increment, decrement } from '../store/slices/testSlice';

class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }

  preload() {
    this.load.image('sky', '/assets/images/sky.png');
  }

  clickCountText: any | Text = {};
  clickCount = 0;
  create() {
    this.add.image(400, 300, 'sky');

    this.clickCountText = this.add.text(100, 200, '');

    const helloButton = this.add.text(100, 100, 'Hello Phaser!', { color: '#0f0' });
    const resetButton = this.add.text(300, 100, 'Reset Phaser!', { color: '#0f0' });
    helloButton.setInteractive();
    resetButton.setInteractive();

    helloButton.on('pointerdown', () => this.updateClickCountText(this.clickCount + 1));
    resetButton.on('pointerdown', () => this.updateClickCountText(0));

    this.updateClickCountText(0);
  }

  updateClickCountText(count: number) {
    this.clickCount = count;
    this.clickCountText.setText(`Button has been clicked ${this.clickCount} times.`);
  }
}

export default MainScene;
