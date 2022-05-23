import React from 'react'

import './shopItem.scss'

interface ShopItemProps {
  name: string
  info: any
  onClick?: () => void
}

function ShopItem({ name, info, onClick }: ShopItemProps) {
  return (
    <div className="shop-item" onClick={onClick}>
      <div className="shop-item__image"></div>
      <div className="shop-item__details">
        <div className="shop-item__details-name">{name}</div>
        <div className="shop-item__details-price">{info.price}</div>
      </div>
      <div className="shop-item__count">15</div>
    </div>
  )
}

export default ShopItem
