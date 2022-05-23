import React from 'react'

import {
  BuffsTab,
  CraftTab,
  ShopTab,
  StatsTab,
  StorageTab,
  UpgradeTab,
  BlueprintsBuyTab,
  ResourcesBuyTab,
} from '../../exports'

import { TAB, TabType } from '../tabs.constants'

interface TabProps {
  name: TabType
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
    case TAB.BLUEPRINGS:
      return <BlueprintsBuyTab />
    case TAB.RESOURCES:
      return <ResourcesBuyTab />

    default:
      return <div></div>
  }
}

export default Tab
