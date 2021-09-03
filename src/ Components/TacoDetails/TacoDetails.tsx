import { formatDetailsText, IShapedTacoDetails } from '../../utils/utilites'
import './TacoDetails.css'

interface IProps {
  tacoDetails: IShapedTacoDetails,
  handleClick: (tacoDetails: IShapedTacoDetails) => void
}

export default function TacoDetails({tacoDetails, handleClick}: IProps) {
  const displayText = formatDetailsText(tacoDetails)

  return (
    <div className='taco-details'>
      <div className='taco-image'>
        <button 
          className={tacoDetails.isFavorited ? 'favorite-btn-selected': 'favorite-btn'}
          onClick={() => handleClick(tacoDetails)}
        ></button>
        <img src={tacoDetails.image} alt={`${tacoDetails.base_layer.name} taco`} />
      </div>
      {displayText}
      <ul className='recipe-list'>
        <h1>Recipes</h1>
        <li><a href={tacoDetails.base_layer.recipe_link}>{tacoDetails.base_layer.name}</a></li>
        <li><a href={tacoDetails.mixin.recipe_link}>{tacoDetails.mixin.name}</a></li>
        <li><a href={tacoDetails.condiment.recipe_link}>{tacoDetails.condiment.name}</a></li>
        <li><a href={tacoDetails.seasoning.recipe_link}>{tacoDetails.seasoning.name}</a></li>
        <li><a href={tacoDetails.shell.recipe_link}>{tacoDetails.shell.name}</a></li>
      </ul>
    </div>
  )
}
