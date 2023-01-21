import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/Sceleton'
import Pagenation from '../components/Pagenation'
// import pizzas from '../assets/pizzas.json'

function Home({ searchValue, setSearchValue }) {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const [categoryId, setCategoryId] = useState(0) //Categories //const [activeIndex, setActiveIndex] = useState('')
  const [sortType, setSortType] = useState({
    name: 'популярности',
    sortProperty: 'rating',
  }) // Sort const [selected, setSelected] = useState(0)

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true
      }
      return false
    })
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />)

  const sceletons = [...new Array(6)].map((_, index) => (
    <Sceleton key={index} />
  ))

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const orger = sortType.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sortType.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    fetch(
      `https://63c12a607165626718742aea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orger}`
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
        window.scrollTo(0, 0)
        console.log(arr)
      })
  }, [categoryId, sortType, currentPage]) //searchValue,

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
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagenation onChagePage={(number) => setCurrentPage(number)} />
    </div>
  )
}
export default Home
