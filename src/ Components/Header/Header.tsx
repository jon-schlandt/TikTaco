import { Link } from 'react-router-dom'

import './Header.css'
import favoritesBtn from './favorites_btn.svg'

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1 className='app-title'>TikTaco</h1>
      </Link>
      <Link
        to='/favorites'
      >
        <img className='favorites-btn'src={favoritesBtn} alt='favorite button'/>
      </Link>
    </header>
  )
}
