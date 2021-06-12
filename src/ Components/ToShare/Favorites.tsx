import { Link } from 'react-router-dom'

import { formatDisplayText, IShapedTacoDetails } from "../../utils/utilites"
import './ToShare.css'

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
    <div className='no-share'>
      <h1 className='to-share-title'>Tacos to Share</h1>
      {favoriteDisplays}
    </div>
  )
}
