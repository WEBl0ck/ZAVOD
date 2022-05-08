import React from 'react'

import { store } from '../../../store/store'
import { increment } from '../../../store/slices/counterSlice'

import './tab.scss'

function CraftTab() {
  console.log(store.getState())

  return (
    <div className="tab-container craft-tab-container">
      <div className="craft-tab__button-container">
        <button className="craft-tab__button" onClick={() => store.dispatch(increment())}>
          Gold
        </button>
      </div>
      <div className="craft-tab__items-list">
        <input className="craft-tab__search" />
        <div className="craft-tab__items"></div>
      </div>
    </div>
  )
}

export default CraftTab
