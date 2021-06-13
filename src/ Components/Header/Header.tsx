import { Link } from 'react-router-dom'

import './Header.css'
import favoritesBtn from './view_favorites.svg'

export default function Header() {
  return (
    <header>
      <Link className='app-title' to='/'>
        <h1>TikTaco</h1>
      </Link>
      <Link
        className='view-favorites'
        to='/favorites'
      >
        <img src={favoritesBtn} alt='view favorites'/>
      </Link>
    </header>
  )
}
