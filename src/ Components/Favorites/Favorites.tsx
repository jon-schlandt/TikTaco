import { Link } from 'react-router-dom'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

import { formatDetailsText, IShapedTacoDetails } from "../../utils/utilites"
import './Favorites.css'

export default function Favorites({favorites}: {favorites: IShapedTacoDetails[]}) {
  const favoriteDisplays = favorites.map(favorite => {
    return (
      <div
        key={favorite.id}
        className='favorite-display'
      >
        {formatDetailsText(favorite)}
        <Link to={`details/${favorite.id}`}>
          <PrimaryButton text='View Details' />
        </Link>
      </div>
    )
  })

  return (
    <div className='favorites'>
      <h1 className='favorites-title'>Tacos to Share</h1>
      {favoriteDisplays.length
        ? favoriteDisplays
        : <p className='no-favorites-msg'>No tacos added yet. Find a sharable taco!</p>
      }
    </div>
  )
}
