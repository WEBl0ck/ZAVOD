import { useState } from 'react'

import Tab from './Tab/Tab'
import { TabName } from './tabs.constants'

import './tabs.scss'

interface TabsProps {
  tabsList: TabName[]
}

function Tabs({ tabsList }: TabsProps) {
  const [activeTab, setActiveTab] = useState<TabName>(tabsList[0])

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {tabsList.map((tab) => (
          <button
            className={`${tab === activeTab ? 'active-tab-button' : 'default-tab-button'}`}
            onClick={() => setActiveTab(tab)}>
            {tab}
          </button>
        ))}
      </div>

      <Tab name={activeTab} />
    </div>
  )
}

export default Tabs
