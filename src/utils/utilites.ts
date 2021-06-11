import { ITaco } from './types'

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

export function cleanTacoData(data: ITacoData) {
  const { base_layer, mixin, condiment, seasoning, shell } = data
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
    }
  }
}
