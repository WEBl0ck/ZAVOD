import React from 'react'

import './input.scss'

interface inputProps {
  placeholder: string
  value: string
  onChange: (e: any) => void
}

function Input({ onChange, value, placeholder }: inputProps) {
  return (
    <div className="input-container">
      <input type="text" className="input" placeholder={placeholder} />
    </div>
  )
}

export default Input
