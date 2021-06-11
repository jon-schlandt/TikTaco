import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'
import './TacoGenerator.css'

interface IProps {
  tacoText: ReactNode,
  error: string,
  handleClick: () => void
}

export default function TacoGenerator({tacoText, error, handleClick}: IProps) {
  return (
    <div className='taco-generator'>
      <h1 className='greeting'>Good toppings!</h1>
      <div className='taco-display'>
        {error && <p>{error}</p>}
        {!tacoText
          ? !error && <p className='generation-msg'>Select the button below to generate a random taco.</p>
          : tacoText
        }
      </div>
      {!tacoText &&
        <PrimaryButton
          text='Generate Taco'
          handleClick={handleClick}
        />
      }
      {tacoText &&
        <>
          <Link to='/details'>
            <PrimaryButton 
              text='View Details'
            />
          </Link>
          <SecondaryButton 
            text='Generate another?'
            handleClick={handleClick}
          />
        </>
      }
    </div>
  )
}
