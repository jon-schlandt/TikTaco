import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'
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
          <SecondaryButton 
            text='Go back'
            handleClick={handleClick}
          />
        </nav>
      }
    </footer>
  )
}
