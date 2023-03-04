import React from 'react'

const CATEGORIES = [
  'Все',
  'Мясные',
  'Bегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

function Categories({ value, onChangeCategory }) {
  // const [activeIndex, setActiveIndex] = useState('')

  return (
    <div className="categories">
      <ul>
        {CATEGORIES.map((categoryName, i) => {
          return (
            <li
              key={i}
              onClick={() => onChangeCategory(i)}
              className={value === i ? 'active' : ''}
            >
              {categoryName}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
export default Categories
