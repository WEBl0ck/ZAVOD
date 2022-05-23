import React from 'react'
import toast from 'react-hot-toast'
import { useAppSelector } from '../../../store/store'

import ShopItem from '../../shared/ShopItem/ShopItem'

import { selectBlueprints } from '../../../store/slices/shopSlice/shopSlice'

import '../Tab/tab.scss'

function BlueprintsBuyTab() {
  const blueprintsObj = useAppSelector(selectBlueprints)

  const blueprints = Object.entries(blueprintsObj)

  const handleBuyBlueprint = (resourceName: string) => {
    toast("You're buy blueprint")
  }

  return (
    <div className="tab-container blueprints-tab__container">
      <div className="blueprints-tab__items">
        {blueprints.map(([resourceName, resource]) => (
          <ShopItem
            key={resourceName}
            name={resourceName}
            info={resource}
            onClick={() => handleBuyBlueprint(resourceName)}
          />
        ))}
      </div>
      <div className="blueprints-tab__button-container">
        <button className="blueprints-tab__button">REVEAL RESEARCH PLAN</button>
      </div>
    </div>
  )
}

export default BlueprintsBuyTab
