import { useEffect } from 'react';

import MainScene from '../../scenes/MainScene';

import { config } from '../../configs/phaser.config';

import PixelCoinIcon from '../../../public/assets/images/pixel-coin.png';

import './mainCanvas.scss';

function MainCanvas() {
  useEffect(() => {
    async function initPhaser() {
      // Need to initialize Phaser here otherwise Gatsby will try to SSR it
      const Phaser = await import('phaser');

      const game = new Phaser.Game({
        ...config,
        parent: 'main',
        scene: [MainScene],
      });
    }

    initPhaser();
  }, []);

  return (
    <>
      <div className="main" id="main" />
      <div className="total-money">
        <span>5.000.000.000</span>
        <img src={PixelCoinIcon} alt="pixel coin icon" />
      </div>
    </>
  );
}

export default MainCanvas;
