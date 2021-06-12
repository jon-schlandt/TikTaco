import './Footer.css'

interface IProps {
  isHome: boolean,
  handleClick?: () => void
}

export default function Footer({ isHome, handleClick }: IProps) {
  return (
    <footer>
      {!isHome && <button onClick={handleClick}>Go back</button>}
    </footer>
  )
}
