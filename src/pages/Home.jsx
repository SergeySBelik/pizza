import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
// import pizzas from '../assets/pizzas.json'
function Home() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`https://63c12a607165626718742aea.mockapi.io/items`)
      .then((res) => res.json())
      .then((arr) => setItems(arr))
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj, i) => (
          <PizzaBlock key={i} {...obj} />
        ))}
      </div>
    </div>
  )
}
export default Home
