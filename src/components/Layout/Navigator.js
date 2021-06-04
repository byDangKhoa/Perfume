import { NavLink } from 'react-router-dom'
import './Navigator.scss'
import HeaderCartButton from './HeaderCartButton'
const Navigator = function () {
  return (
    <header className='header'>
      <h1>Made by Khoa</h1>
      <ul>
        <NavLink className='link' activeClassName='active' to='/main'>
          Main Page
        </NavLink>
        <NavLink className='link' activeClassName='active' to='/login'>
          Login
        </NavLink>
        <NavLink className='link' activeClassName='active' to='/import'>
          Import
        </NavLink>
      </ul>
      <HeaderCartButton>Cart</HeaderCartButton>
    </header>
  )
}
export default Navigator
