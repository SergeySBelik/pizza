import React, { useEffect, useState, useContext } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaBlock from '../components/PizzaBlock'
import Sceleton from '../components/Sceleton'
import Pagenation from '../components/Pagenation'
import { SearchContext } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoryId, setCurrentPage } from '../redux/slices/filterSlice'
import axios from 'axios'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Home() {
  const dispatch = useDispatch()
  const { categoryId, sort, currentPage } = useSelector((state) => state.filter)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }
  const onChagePage = (number) => {
    dispatch(setCurrentPage(number))
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

  useEffect(() => {
    setIsLoading(true)
    const orger = sort.sortProperty.includes('-') ? 'asc' : 'desc'
    const sortBy = sort.sortProperty.replace('-', '')
    const category = categoryId > 0 ? `category=${categoryId}` : ''

    axios
      .get(
        `https://63c12a607165626718742aea.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${orger}`
      )
      .then((res) => {
        setItems(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoading(false)
      })
    window.scrollTo(0, 0)
  }, [categoryId, sort.sortProperty, currentPage])
  const [nav, setNav] = useState(false)
  return (
    <div className="container">
      <div
        className={
          nav
            ? 'content__top burger_menu burger_active'
            : 'content__top burger_menu'
        }
      >
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <div onClick={() => setNav(!nav)} className="mobile_btn">
        {nav ? <AiOutlineClose size={50} /> : <AiOutlineMenu size={50} />}
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? sceletons : pizzas}</div>
      <Pagenation currentPage={currentPage} onChagePage={onChagePage} />
    </div>
  )
}
export default Home
