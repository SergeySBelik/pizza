import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/Sceleton'
// import pizzas from '../assets/pizzas.json'
function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [categoryId, setCategoryId] = useState(0) //Categories //const [activeIndex, setActiveIndex] = useState('')
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  }) // Sort const [selected, setSelected] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    const orger = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    fetch(
      `https://63c12a607165626718742aea.mockapi.io/items?${category}&sortBy=${sortBy}&order=${orger}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
        window.scrollTo(0, 0)
        console.log(arr)
      })
  }, [categoryId, sortType])

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Sceleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  )
}
export default Home
