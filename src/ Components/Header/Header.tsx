import './Header.css'
import favoritesBtn from './favorites_btn.svg'

export default function Header() {
  return (
    <header>
      <h1 className='app-title'>TikTaco</h1>
      <img className='favorites-btn'src={favoritesBtn} />
    </header>
  )
}
