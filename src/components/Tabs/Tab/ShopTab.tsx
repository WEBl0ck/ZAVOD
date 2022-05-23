import React from 'react'

import { Tabs } from '../../exports'

import { TabType, TAB } from '../../Tabs/tabs.constants'

function ShopTab() {
  const ShopTabs: TabType[] = [TAB.BLUEPRINGS, TAB.RESOURCES]

  return (
    <div className="tab-container shop-tab-container">
      <Tabs tabsList={ShopTabs} activeTabColor="BLUE" />
    </div>
  )
}

export default ShopTab
