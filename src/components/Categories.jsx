import React, { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState('')
  const categories = [
    'Все',
    'Мясные',
    'Bегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => setActiveIndex(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {value}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Categories
