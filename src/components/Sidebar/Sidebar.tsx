import React from 'react'

import { Tabs } from '.././exports'

import { TabName } from '../Tabs/tabs.constants'

import './sidebar.scss'

interface SidebarProps {
  position: 'left' | 'right'
}

function Sidebar({ position }: SidebarProps) {
  const leftSidebarTabs: TabName[] = ['CRAFT', 'STORAGE', 'STATS']
  const rightSidebarTabs: TabName[] = ['SHOP', 'UPGRADE', 'BUFFS']

  return (
    <div className={`sidebar ${position == 'left' ? 'sidebar-left' : 'sidebar-right'}`}>
      {position === 'left' ? <Tabs tabsList={leftSidebarTabs} /> : <Tabs tabsList={rightSidebarTabs} />}
    </div>
  )
}

export default Sidebar
