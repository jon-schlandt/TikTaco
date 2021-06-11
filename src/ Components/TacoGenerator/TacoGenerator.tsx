import { Link } from 'react-router-dom'

import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'

import { formatDisplayText, IShapedTacoDetails } from '../../utils/utilites'
import './TacoGenerator.css'

interface IProps {
  tacoDetails: IShapedTacoDetails,
  error: string,
  handleClick: () => void
}

export default function TacoGenerator({tacoDetails, error, handleClick}: IProps) {
  return (
    <div className='taco-generator'>
      <h1 className='greeting'>Good toppings!</h1>
      <div className='taco-display'>
        {error && <p>{error}</p>}
        {!tacoDetails
          ? !error && <p className='generation-msg'>Select the button below to generate a random taco.</p>
          : formatDisplayText(tacoDetails)
        }
      </div>
      {!tacoDetails &&
        <PrimaryButton
          text='Generate Taco'
          handleClick={handleClick}
        />
      }
      {tacoDetails &&
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
