import { formatDisplayText, IShapedTacoDetails } from "../../utils/utilites"

export default function ToShare({favorites}: {favorites: IShapedTacoDetails[]}) {
  const favoriteDisplays = favorites.map(favorite => {
    return (
      <div 
        key={favorite.id}
        className='favorite-display'
      >
        {formatDisplayText(favorite)}
      </div>
    )
  })

  return (
    <div className='no-share'>
      {favoriteDisplays}
    </div>
  )
}
