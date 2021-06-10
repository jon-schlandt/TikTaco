import { ITaco } from './types'

interface ITacoData {
  base_layer: { name: string, recipe: string },
  mixin: { name: string, recipe: string }, 
  condiment: { name: string, recipe: string }, 
  seasoning: { name: string, recipe: string },
  shell: { name: string, recipe: string }
}

export function cleanTacoData(data: ITacoData): ITaco {
  const { base_layer, mixin, condiment, seasoning, shell } = data
  return {
    base: base_layer.name,
    mixin: mixin.name,
    condiment: condiment.name,
    seasoning: seasoning.name,
    shell: shell.name
  }
}
