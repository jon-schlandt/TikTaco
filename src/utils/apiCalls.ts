import { cleanTacoData } from './utilites'

// ***** ----- Data fetching ----- ***** //

export function getTacoData() {
  return fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(resp => {
      return checkResponse(resp)
    })
    .then(data => cleanTacoData(data))
}

// ***** ----- Error handling ----- ***** //
function checkResponse(resp: Response) {
  if (resp.ok) {
    return resp.json()
  }

  handleError(resp)
}

function handleError(resp: Response) {
  if (resp.status === 404) {
    throw Error('Sorry, taco not found. Try again.')
  }

  if (resp.status === 500) {
    throw Error('Sorry, our taco generator isn\'t working. Try again.')
  }

  throw Error('Sorry, a problem occurred. Try again.')
}
