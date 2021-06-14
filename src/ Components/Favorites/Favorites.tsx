import { Link } from 'react-router-dom'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'

import { formatDetailsText, IShapedTacoDetails } from "../../utils/utilites"
import './Favorites.css'

interface IProps {
  favorites: IShapedTacoDetails[],
  handleClick: (tacoDetails: IShapedTacoDetails) => void
}

export default function Favorites({ favorites, handleClick }: IProps) {
  const favoriteDisplays = favorites.map(favorite => {
    return (
      <div
        key={favorite.id}
        className='favorite-display'
      >
        {formatDetailsText(favorite)}
        <fieldset className='favorite-display-btns'>
          <SecondaryButton 
            text='Remove'
            handleClick={() => handleClick(favorite)}
          />
          <Link to={`details/${favorite.id}`}>
            <PrimaryButton text='View Details' />
          </Link>
        </fieldset>
      </div>
    )
  })

  return (
    <div className='favorites'>
      <h1 className='favorites-title'>My Sharable Tacos</h1>
      {favoriteDisplays.length
        ? favoriteDisplays
        : <p className='no-favorites-msg'>No tacos here. Find a sharable taco!</p>
      }
    </div>
  )
}
