import React from 'react'
import { useAppSelector } from '../../../store/store'

import ShopItem from '../../shared/ShopItem/ShopItem'

import { selectUpgrades } from '../../../store/slices/upgradeSlice/upgradeSlice'

import '../Tab/tab.scss'

function UpgradeTab() {
  const upgradesObj = useAppSelector(selectUpgrades)

  const upgrades = Object.entries(upgradesObj)

  return (
    <div className="tab-container upgrades-tab__container">
      {upgrades.map(([resourceName, resource]) => (
        <ShopItem key={resourceName} name={resourceName} info={resource} />
      ))}
    </div>
  )
}

export default UpgradeTab
