interface ITacoDetails {
  tacoData: ITacoData,
  tacoImage: { urls: { regular: string}}
}

interface IShapedTacoDetails extends ITacoData {
  image: string
}

export interface ITacoData {
  base_layer: IToppingData,
  mixin: IToppingData, 
  condiment: IToppingData, 
  seasoning: IToppingData,
  shell: IToppingData
}

interface IToppingData { 
  name: string,
  url: string
}

export function shapeTacoDetails(data: ITacoDetails): IShapedTacoDetails {
  const { base_layer, mixin, condiment, seasoning, shell } = data.tacoData
  return { 
    base_layer: {
      name: base_layer.name,
      url: base_layer.url
    },
    mixin: {
      name: mixin.name,
      url: mixin.url
    },
    condiment: {
      name: condiment.name,
      url: condiment.url
    },
    seasoning: {
      name: seasoning.name,
      url: seasoning.url
    },
    shell: {
      name: shell.name,
      url: shell.url
    },
    image: data.tacoImage.urls.regular
  }
}
