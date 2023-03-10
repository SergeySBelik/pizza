import React from 'react'

function Categories({ value, onChangeCategory }) {
  // const [activeIndex, setActiveIndex] = useState('')
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
        {categories.map((categoryName, i) => {
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
