import { useState } from 'react'

import { ITaco } from '../../utils/types'
import { getTacoData } from '../../utils/apiCalls'

import './TacoGenerator.css'

export default function TacoGenerator() {
  const [taco, setTaco] = useState<ITaco | null>(null)

  const generateTaco = () => {
    getTacoData()
      .then(data => setTaco(data))
  }

  const tacoText = (
    <p>{`${taco?.base} with ${taco?.condiment}, ganished with ${taco?.mixin} topped off with ${taco?.seasoning} and wrapped in a delicious ${taco?.shell}`}</p>
  )

  return (
    <div className='taco-generator'>
      <h1 className='greeting'>Good toppings!</h1>
      <div className='taco-display'>
        {!taco 
          ? <p>Select the button below to generate a random taco.</p>
          : tacoText
        }
      </div>
      <button onClick={generateTaco}>Generate taco</button>
    </div>
  )
}
