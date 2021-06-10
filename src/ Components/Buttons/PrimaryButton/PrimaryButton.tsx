import './PrimaryButton.css'

interface IProps {
  text: string,
  handleClick?: () => void
}

export default function PrimaryButton({text, handleClick}: IProps) {
  return (
    <button 
      className='primary-btn'
      onClick={handleClick}
    >
      {text}
    </button>
  )
}
