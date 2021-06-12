import { Link } from 'react-router-dom'
import './Footer.css'

interface IProps {
  isHome: boolean,
  handleClick?: () => void
}

export default function Footer({ isHome, handleClick }: IProps) {
  return (
    <footer>
      {!isHome && 
        <nav>
          <button 
            className='back-btn'
            onClick={handleClick}
          >
            Go back
          </button>
        </nav>
      }
    </footer>
  )
}
