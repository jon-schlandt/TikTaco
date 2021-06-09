export function getTacoData() {
  fetch('http://taco-randomizer.herokuapp.com/random')
    .then(resp => {
      if (resp.ok) {
        return resp.json()
      }
    })
    .then(data => {
      console.log(data)
    })
}
