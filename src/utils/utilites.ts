import { ITaco } from './types'

interface ITacoData {
  base_layer: IToppingData,
  mixin: IToppingData, 
  condiment: IToppingData, 
  seasoning: IToppingData,
  shell: IToppingData
}

interface IToppingData { name: string, recipe: string, url: string}

export function cleanTacoData(data: ITacoData): ITaco {
  console.log(data)
  const { base_layer, mixin, condiment, seasoning, shell } = data
  return {
    base: base_layer.name,
    mixin: mixin.name,
    condiment: condiment.name,
    seasoning: seasoning.name,
    shell: shell.name
  }
}
