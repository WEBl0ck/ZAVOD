export const TAB = {
  CRAFT: 'CRAFT',
  STORAGE: 'STORAGE',
  STATS: 'STATS',
  SHOP: 'SHOP',
  UPGRADE: 'UPGRADE',
  BUFFS: 'BUFFS',
  BLUEPRINGS: 'BLUEPRINGS',
  RESOURCES: 'RESOURCES',
} as const
export type TabType = keyof typeof TAB

export const ACTIVE_TAB_BUTTON_COLLORS = {
  RED: 'RED',
  YELLOW: 'YELLOW',
  PINK: 'PINK',
  BLUE: 'BLUE',
}
export type ActiveTabColorType = keyof typeof ACTIVE_TAB_BUTTON_COLLORS
