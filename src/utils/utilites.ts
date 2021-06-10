import { ITaco } from './types'

interface ITacoData {
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

interface ICleanedTacoData {
  toppings: ITaco,
  urls: ITaco
}

export function cleanTacoData(data: ITacoData): ICleanedTacoData {
  console.log(data)
  const { base_layer, mixin, condiment, seasoning, shell } = data
  return {
    toppings: {
      base: base_layer.name,
      mixin: mixin.name,
      condiment: condiment.name,
      seasoning: seasoning.name,
      shell: shell.name
    },
    urls: {
      base: base_layer.url,
      mixin: mixin.url,
      condiment: condiment.url,
      seasoning: seasoning.url,
      shell: shell.url
    }
  }
}
