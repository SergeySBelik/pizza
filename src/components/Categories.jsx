import React from 'react'

const CATEGORIES = ['Усі', 'Мʼясні', 'Bегетаріанська', 'Гриль', 'Гострі']

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
