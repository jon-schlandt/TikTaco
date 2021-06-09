export function getTacoData() {
  return fetch('http://taco-randomizer.herokuapp.com/random/')
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
    })
}
