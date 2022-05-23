import React from 'react'

import './sort.scss'

type SortOption = 'T' | 'N' | 'P' | 'D '

interface SortProps {
  options: SortOption[]
}

function Sort({ options }: SortProps) {
  return (
    <div className="sort">
      <div className="sort-options">
        {options.map((option) => (
          <div className="sort-option" key={option}>
            <p>{option}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sort
