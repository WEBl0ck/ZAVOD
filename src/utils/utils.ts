import { Resources } from '../store/slices/resourcesSlice/initialState'
import { Items } from '../store/slices/itemsSlice/initialState'

export type ResourcesAndItems = Partial<Items & Resources>

export type Entries<T> = {
  [K in keyof T]: [K, T[K]]
}[keyof T][]

export const getTypeFromState = (initialState: ResourcesAndItems) => {
  type Keys = keyof typeof initialState

  return Object.fromEntries(Object.keys(initialState).map((key) => [key, key])) as { [k in Keys]: k }
}
