import { useState } from 'react'
import { Link } from 'react-router-dom'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'

import { ITaco } from '../../utils/types'
import { getTacoData } from '../../utils/apiCalls'
import './TacoGenerator.css'

export default function TacoGenerator() {
  const [taco, setTaco] = useState<ITaco | null>(null)
  const [error, setError] = useState('')

  const generateTaco = () => {
    getTacoData()
      .then(data => setTaco(data))
      .catch(error => setError(error.message))
  }

  const formatTacoText = () => {
    return (
      <p className='taco-text'>{`${taco?.base} with ${taco?.condiment}, ganished with ${taco?.mixin} topped off with ${taco?.seasoning} and wrapped in a delicious ${taco?.shell}`}</p>
    )
  }

  return (
    <div className='taco-generator'>
      <h1 className='greeting'>Good toppings!</h1>
      <div className='taco-display'>
        {error && <p>{error}</p>}
        {!taco
          ? !error && <p className='generation-msg'>Select the button below to generate a random taco.</p>
          : formatTacoText()
        }
      </div>
      {!taco &&
        <PrimaryButton
          text='Generate Taco'
          handleClick={generateTaco}
        />
      }
      {taco &&
        <>
          <Link to='/details'>
            <PrimaryButton 
              text='View Details'
            />
          </Link>
          <SecondaryButton 
            text='Generate another?'
            handleClick={generateTaco}
          />
        </>
      }
    </div>
  )
}
