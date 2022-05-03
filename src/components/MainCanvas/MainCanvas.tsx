import { useEffect } from 'react';

import MainScene from '../../scenes/MainScene';

import { config } from '../../configs/phaser.config';

import './MainCanvas.scss';

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
    <div
      className="main"
      id="main"
      style={{ height: '100vh', width: '100%', overflow: 'hidden', cursor: 'move' }}
    ></div>
  );
}

export default MainCanvas;
