import { Link } from 'react-router-dom'
import imgLogo from '../assets/img/pizza-logo.svg'
import cartIcon from '../assets/img/cart.svg'
import Search from './Search/Search'
import SearchIcon from './Search/SearchIcon'
import { useSelector } from 'react-redux'
import React, { useState } from 'react'

function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart)
  const totalCount = items.reduce((sum, item) => sum + item.count, 0)

  const [showSearch, setShowSearch] = useState(true)

  return (
    <div className="header">
      <div className="container">
        <Link to="/">
          <div className="header__logo">
            <img width="38" src={imgLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </Link>

        <SearchIcon onClick={() => setShowSearch((value) => !value)} />
        <Search showSearch={showSearch} />

        <div className="header__cart">
          <Link to="/cart" className="button button--cart">
            <span>{totalPrice}</span>
            <div className="button__delimiter"></div>
            <img src={cartIcon} alt="Cart" />
            <span className="header__cart-icon">{totalCount}</span>
          </Link>
        </div>
      </div>
      <Search showSearch={showSearch} className="mobile" />
    </div>
  )
}
export default Header
