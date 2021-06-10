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