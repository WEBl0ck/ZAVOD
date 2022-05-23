import React from 'react'

import { useAppDispatch, useAppSelector } from '../../../store/store'

import Sort from '../../shared/Sort/Sort'
import Input from '../../shared/Input/Input'
import Item from '../../shared/Item/Item'

import { store } from '../../../store/store'
import { increment, setCurrentCraftOption, selectCurrentCraftOption } from '../../../store/slices/mainSlice/mainSlice'
import { selectResources } from '../../../store/slices/resourcesSlice/resourcesSlice'
import { selectItems } from '../../../store/slices/itemsSlice/itemsSlice'
import { RESOURCES_TYPES } from '../../../store/slices/resourcesSlice/initialState'
import { ITEMS_TYPES } from '../../../store/slices/itemsSlice/initialState'

import { Entries } from '../../../utils/utils'

import './tab.scss'

function CraftTab() {
  const dispatch = useAppDispatch()
  const resourcesObj = useAppSelector(selectResources)
  const itemsObj = useAppSelector(selectItems)
  const currentCraftOption = useAppSelector(selectCurrentCraftOption)

  const resources = Object.entries(resourcesObj) as Entries<typeof resourcesObj>
  const items = Object.entries(itemsObj) as Entries<typeof itemsObj>

  const combinedItems = [...items, ...resources]
  const COMBINED_ITEMS_TYPES = { ...RESOURCES_TYPES, ...ITEMS_TYPES }

  return (
    <div className="tab-container craft-tab-container">
      <div className="craft-tab__button-container">
        <button className="craft-tab__button" onClick={() => store.dispatch(increment())}>
          {Object.keys(currentCraftOption)}
        </button>
      </div>
      <div className="craft-tab__items-list">
        <Input value="" onChange={() => null} placeholder="search..." />
        <Sort options={['T', 'N', 'P', 'D ']} />
        <div className="craft-tab__items">
          {combinedItems.map(([resourceName, resource]) => (
            <Item
              name={resourceName}
              key={resourceName}
              onClick={() =>
                dispatch(
                  setCurrentCraftOption({
                    [COMBINED_ITEMS_TYPES[resourceName]]: resource,
                  })
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CraftTab
