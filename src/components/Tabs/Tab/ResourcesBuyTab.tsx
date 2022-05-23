import React from 'react'
import { useAppSelector } from '../../../store/store'

import ShopItem from '../../shared/ShopItem/ShopItem'

import { selectResources } from '../../../store/slices/shopSlice/shopSlice'

import '../Tab/tab.scss'

function ResourcesBuyTab() {
  const resourcesObj = useAppSelector(selectResources)

  const resources = Object.entries(resourcesObj)

  return (
    <div className="tab-container resources-shop-tab__container">
      <div className="resources-shop-tab_items">
        {resources.map(([resourceName, resource]) => (
          <ShopItem key={resourceName} name={resourceName} info={resource} />
        ))}
      </div>
    </div>
  )
}

export default ResourcesBuyTab
