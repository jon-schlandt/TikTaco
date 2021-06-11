import { formatDisplayText, IShapedTacoDetails } from '../../utils/utilites'
import './TacoDetails.css'

interface IProps {
  tacoDetails: IShapedTacoDetails
}

export default function TacoDetails({tacoDetails}: IProps) {
  console.log(formatDisplayText(tacoDetails))
  return (
    <div></div>
  )
}
