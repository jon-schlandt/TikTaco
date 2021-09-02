interface ITacoDetails {
  tacoData: ITacoData,
  tacoImage: { urls: { regular: string}}
}

// ***** ----- Data cleaning and shaping ----- ***** //

export interface IShapedTacoDetails extends ITacoData {
  id: string,
  image: string,
  isFavorited: boolean
}

export interface ITacoData {
  base_layer: IToppingData,
  mixin: IToppingData, 
  condiment: IToppingData, 
  seasoning: IToppingData,
  shell: IToppingData,
  [key: string]: any
}

interface IToppingData { 
  name: string,
  recipe_link: string
}

export function shapeTacoDetails(data: ITacoDetails): IShapedTacoDetails {
  const { base_layer, mixin, condiment, seasoning, shell } = data.tacoData
  // const toppings = [ base_layer, mixin, condiment, seasoning, shell ]

  // toppings.forEach(topping => {
  //   topping.name = formatName(topping.name)
  // })
  
  return { 
    id: formatId(data.tacoData),
    base_layer: { name: base_layer.name, recipe_link: base_layer.recipe_link },
    mixin: { name: mixin.name, recipe_link: mixin.recipe_link},
    condiment: { name: condiment.name, recipe_link: condiment.recipe_link },
    seasoning: { name: seasoning.name, recipe_link: seasoning.recipe_link },
    shell: { name: trimName(shell.name), recipe_link: shell.recipe_link },
    image: data.tacoImage.urls.regular,
    isFavorited: false
  }
}

// function formatName(name: string) {
//   return filterName(capitalizeName(name))
// }

// function capitalizeName(name: string) {
//   const nameArr = name.split(' ')
  
//   return nameArr.map((word, index) => {
//     const firstChar = word.substring(0, 1)
//     const remainingChars = word.substring(1)

//     if ((verifyArticle(word) && index !== 0)) {
//       return word
//     }

//     return firstChar.toUpperCase().concat(remainingChars)
//   }).join(' ')
// }

// function verifyArticle(word: string) {
//   const articles = ['a', 'and', 'about', 'the', 'of', 'or']

//   if (articles.includes(word.toLowerCase())) {
//     return true
//   }

//   return false
// }

// function filterName(name: string) {
//   if (name.includes('(Traditional; US')) {
//     name = name.replace(' (Traditional; US)', '')
//   }

//   return name
// }

function trimName(name: string) {
  let nameArr = name.split(' ')
  let lastWord = nameArr[nameArr.length - 1]

  if (lastWord[lastWord.length - 1] === 's') {
    lastWord = lastWord.slice(0, lastWord.length - 1)
  }

  nameArr.splice(nameArr.length - 1, 1)
  nameArr.push(lastWord)

  return nameArr.join(' ')
}

// ***** ----- General purpose ----- ***** //

export function formatDisplayText(tacoDetails: IShapedTacoDetails) {
  return (
    <p className='display-text'><span>{tacoDetails.base_layer.name}</span> with <span>{tacoDetails.mixin.name}</span>, ganished with <span>{tacoDetails.condiment.name}</span> topped off with <span>{tacoDetails.seasoning.name}</span> and wrapped in a delicious <span>{tacoDetails.shell.name}</span></p>
  )
}

export function formatDetailsText(tacoDetails: IShapedTacoDetails) {
  return (
    <div className='details-text'>
      <p className='primary-toppings'>{tacoDetails.base_layer.name} with {tacoDetails.mixin.name}</p>
      <p className='secondary-toppings'>ganished with {tacoDetails.condiment.name} topped with {tacoDetails.seasoning.name} and wrapped in a delicious {tacoDetails.shell.name}</p>
    </div>
  )
}

export function formatId(tacoData: ITacoData) {
  const test = Object.keys(tacoData)

  return test.reduce((acc: string, cur: string): string => {
    return acc + tacoData[cur].name[0]
  }, '')
}
