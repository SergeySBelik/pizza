import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/Sceleton'
// import pizzas from '../assets/pizzas.json'
function Home() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    fetch(`https://63c12a607165626718742aea.mockapi.io/items`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr)
        setIsLoading(false)
        window.scrollTo(0, 0)
      })
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
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
