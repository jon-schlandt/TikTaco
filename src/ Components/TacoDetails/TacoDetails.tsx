import { formatDisplayText, IShapedTacoDetails } from '../../utils/utilites'
import './TacoDetails.css'

interface IProps {
  tacoDetails: IShapedTacoDetails
}

export default function TacoDetails({tacoDetails}: IProps) {
  const displayText = formatDisplayText(tacoDetails)

  return (
    <div className='taco-details'>
      <div className='taco-image'>
        <img src={tacoDetails.image} alt='image of taco' />
      </div>
      {displayText}
    </div>
  )
}
