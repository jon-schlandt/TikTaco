import { Link, NavLink } from 'react-router-dom'

import './Header.css'

export default function Header() {
  return (
    <header>
      <Link className='app-title' to='/'>
        <h1>TikTaco</h1>
      </Link>
      <NavLink
        className='view-favorites'
        activeClassName='active'
        to='/favorites'
      />
    </header>
  )
}
