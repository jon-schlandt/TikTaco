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
        <img src={tacoDetails.image} alt={`${tacoDetails.base_layer.name} taco`} />
      </div>
      {displayText}
      <ul className='recipe-list'>
        <h1>Recipes</h1>
        <li><a href={tacoDetails.base_layer.url}>{tacoDetails.base_layer.name}</a></li>
        <li><a href={tacoDetails.mixin.url}>{tacoDetails.mixin.name}</a></li>
        <li><a href={tacoDetails.condiment.url}>{tacoDetails.condiment.name}</a></li>
        <li><a href={tacoDetails.seasoning.url}>{tacoDetails.seasoning.name}</a></li>
        <li><a href={tacoDetails.shell.url}>{tacoDetails.shell.name}</a></li>
      </ul>
    </div>
  )
}
