import React from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import pizzas from '../assets/pizzas.json'
function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((obj, i) => (
          <PizzaBlock {...obj} />
        ))}
      </div>
    </div>
  )
}
export default Home
