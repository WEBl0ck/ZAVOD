import { useState } from 'react'

import Tab from './Tab/Tab'
import { TabType, ActiveTabColorType } from './tabs.constants'

import './tabs.scss'

interface TabsProps {
  tabsList: TabType[]
  activeTabColor?: ActiveTabColorType
}

function Tabs({ tabsList, activeTabColor = 'YELLOW' }: TabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>(tabsList[0])

  return (
    <div className="tabs-container">
      <div className="tabs-buttons">
        {tabsList.map((tab, index) => (
          <button
            className={`${tab === activeTab ? `active-tab-button-${activeTabColor}` : 'default-tab-button'}`}
            onClick={() => setActiveTab(tab)}
            key={tab}>
            {tab}
          </button>
        ))}
      </div>

      <Tab name={activeTab} />
    </div>
  )
}

export default Tabs
