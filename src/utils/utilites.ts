interface TacoData {
  base_layer: { name: string },
  mixin: { name: string }, 
  condiment: { name: string }, 
  seasoning: { name: string },
  shell: { name: string }
}

interface Taco {
  base: string, 
  mixin: string,
  condiment: string,
  seasoning: string,
  shell: string
}

export function cleanTacoData(data: TacoData): Taco {
  const { base_layer, mixin, condiment, seasoning, shell } = data
  return {
    base: base_layer.name,
    mixin: mixin.name,
    condiment: condiment.name,
    seasoning: seasoning.name,
    shell: shell.name
  }
}
