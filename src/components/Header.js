import {Link, NavLink} from "react-router-dom"

import Logo from '../images/logo.jpg'

import './header.css'

export const Header = () => {
  return (
    <header>
      <Link  to="/" className='logo'>
        <img src={Logo} alt="falcon logo" />
        <span >Shopmate</span>
      </Link>
      <nav className='navigation'>
        <NavLink to='/' className="link" end>
Home
        </NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className='items'>Cart: 2</Link>
      </header>
  )
}
