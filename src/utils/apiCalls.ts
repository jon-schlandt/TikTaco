import { cleanTacoData } from './utilites'

// ***** ----- Data fetching ----- ***** //

export async function getTacoDetails() {
  const tacoData = await getTacoData();
  const tacoImage = await getTacoImage();
}

function getTacoData() {
  return fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(resp => {
      return checkResponse(resp)
    })
}

function getTacoImage() {
  return fetch('https://api.unsplash.com/photos/random?query=taco', {headers: { Authorization: 'Client-ID SVh3qN5qzhFdLisOJQj9vdBuBYOFNI6FNPrWcweQsZM' }})
    .then(resp => {
      return checkResponse(resp)
    })
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
    throw Error('Sorry, taco not found. Please try again.')
  }

  if (resp.status === 500) {
    throw Error('Sorry, our taco generator is having some difficulties. Please try again.')
  }

  throw Error('Sorry, a problem occurred. Please try again.')
}
