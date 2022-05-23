import React from 'react'

import './item.scss'

interface ItemProps {
  name: string
  onClick?: () => void
}

function Item({ name, onClick }: ItemProps) {
  return (
    <div className="item" onClick={onClick}>
      <p className="item-name">{name}</p>
    </div>
  )
}

export default Item
