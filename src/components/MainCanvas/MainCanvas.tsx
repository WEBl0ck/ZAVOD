import { useEffect } from 'react'
import { connect } from 'react-redux'

import MainScene from '../../scenes/MainScene'

import { config } from '../../configs/phaser.config'

import PixelCoinIcon from '/assets/images/pixel-coin.png'

import './mainCanvas.scss'

function MainCanvas({ counter }: any) {
  useEffect(() => {
    async function initPhaser() {
      // Need to initialize Phaser here otherwise Gatsby will try to SSR it
      const Phaser = await import('phaser')

      const game = new Phaser.Game({
        ...config,
        parent: 'main',
        scene: [MainScene],
      })
    }

    initPhaser()
  }, [])

  return (
    <>
      <div className="main" id="main" />
      <div className="total-money">
        <span>{counter}</span>
        <img src={PixelCoinIcon} alt="pixel coin icon" />
      </div>
    </>
  )
}

function countStateToProps(state: any) {
  return { counter: state.counter.value }
}

export default connect(countStateToProps)(MainCanvas)
