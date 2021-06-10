import { cleanTacoData } from './utilites'

// ***** ----- Data fetching ----- ***** //

export function getTacoData() {
  return fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
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
    throw Error('Sorry, taco not found.')
  }

  if (resp.status === 500) {
    throw Error('Sorry, our taco generator isn\'t working.')
  }

  throw Error('Sorry, a problem occurred.')
}
