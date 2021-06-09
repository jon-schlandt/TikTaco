import { ITaco } from '../../utils/types'
import './TacoGenerator.css'

export default function TacoGenerator({taco}: {taco: ITaco} ) {
  return (
    <div className='taco-generator'>
      <h1 className='greeting'>Good toppings!</h1>
      <div className='taco-display'>
        <p>Select the button below to generate a random taco.</p>
      </div>
      <button>Generate taco</button>
    </div>
  )
}
