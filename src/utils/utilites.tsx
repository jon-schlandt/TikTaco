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
  url: string
}

export function shapeTacoDetails(data: ITacoDetails): IShapedTacoDetails {
  const { base_layer, mixin, condiment, seasoning, shell } = data.tacoData
  
  return { 
    id: formatId(data.tacoData),
    base_layer: { name: base_layer.name, url: base_layer.url },
    mixin: { name: mixin.name, url: mixin.url},
    condiment: { name: condiment.name, url: condiment.url },
    seasoning: { name: seasoning.name, url: seasoning.url },
    shell: { name: shell.name, url: shell.url },
    image: data.tacoImage.urls.regular,
    isFavorited: false
  }
}

export function verifyArticle(word: string) {
  const wordLC = word.toLowerCase()

  if (wordLC === 'the' || wordLC === 'a' || wordLC === 'or') {
    return true
  }

  return false
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
