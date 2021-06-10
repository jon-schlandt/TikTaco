import './SecondaryButton.css'

interface IProps {
  text: string,
  handleClick?: () => void
}

export default function SecondaryButton({text, handleClick}: IProps) {
  return (
    <button 
      className='secondary-btn'
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
