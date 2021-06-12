import { Link } from 'react-router-dom'

import { formatDisplayText, IShapedTacoDetails } from "../../utils/utilites"
import './Favorites.css'

export default function Favorites({favorites}: {favorites: IShapedTacoDetails[]}) {
  const favoriteDisplays = favorites.map(favorite => {
    return (
      <Link
        to={`details/${favorite.id}`} 
        key={favorite.id}
        className='favorite-display'
      >
        {formatDisplayText(favorite)}
      </Link>
    )
  })

  return (
    <div className='favorites'>
      <h1 className='favorites-title'>Favorites</h1>
      {favoriteDisplays.length
        ? favoriteDisplays
        : <p className='no-favorites-msg'>No favorites added yet.</p>
      }
    </div>
  )
}
