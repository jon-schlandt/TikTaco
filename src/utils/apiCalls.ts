import { shapeTacoDetails, ITacoData } from './utilites'

// ***** ----- Data fetching ----- ***** //

export async function getTacoDetails() {
  const tacoData: ITacoData  = await getTacoData();
  const tacoImage: { urls: { regular: string}} = await getTacoImage();

  return Promise.all([tacoData, tacoImage])
    .then(data => shapeTacoDetails({ tacoData: data[0], tacoImage: data[1] }))
}

async function getTacoData() {
  const resp = await fetch('https://taco-randomizer.herokuapp.com/random/');
  return checkResponse(resp);
}

async function getTacoImage() {
  const resp = await fetch('https://api.unsplash.com/photos/random?query=tortilla', { headers: { Authorization: 'Client-ID SVh3qN5qzhFdLisOJQj9vdBuBYOFNI6FNPrWcweQsZM' } });
  return checkResponse(resp);
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
