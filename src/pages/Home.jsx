import React, { useEffect, useState, useContext } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/Sceleton'
import Pagenation from '../components/Pagenation'
import { SearchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId } from '../redux/slices/filterSlice'
import axios from 'axios'

function Home() {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector((state) => state.filter)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const { searchValue } = useContext(SearchContext)

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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
    const orger = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''
    // fetch(
    //   `https://63c12a607165626718742aea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orger}`
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr)
    //     setIsLoading(false)
    //     window.scrollTo(0, 0)
    //     // console.log(arr)
    //   })
    axios
      .get(
        `https://63c12a607165626718742aea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orger}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, currentPage])

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagenation onChagePage={(number) => setCurrentPage(number)} />
    </div>
  )
}
export default Home
