import React from 'react'

import { BuffsTab, CraftTab, ShopTab, StatsTab, StorageTab, UpgradeTab } from '../../exports'

import { TAB, TabName } from '../tabs.constants'

interface TabProps {
  name: TabName
}

function Tab({ name }: TabProps) {
  switch (name) {
    case TAB.CRAFT:
      return <CraftTab />
    case TAB.STORAGE:
      return <StorageTab />
    case TAB.STATS:
      return <StatsTab />
    case TAB.SHOP:
      return <ShopTab />
    case TAB.UPGRADE:
      return <UpgradeTab />
    case TAB.BUFFS:
      return <BuffsTab />

    default:
      return <div></div>
  }
}

export default Tab
