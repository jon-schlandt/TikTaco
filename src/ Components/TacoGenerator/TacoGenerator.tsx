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
      <div className='taco-display'>
        <h1 className='greeting'>Good toppings!</h1>
        <div>
          {error && <p>{error}</p>}
          {!tacoDetails
            ? !error && <p className='generation-msg'>Select the button below to generate a random taco.</p>
            : formatDisplayText(tacoDetails)
          }
        </div>
      </div>
      <fieldset className='generator-btns'>
        {!tacoDetails &&
          <PrimaryButton
            text='Generate Taco'
            handleClick={handleClick}
          />
        }
        {tacoDetails &&
          <>
            <Link to={`/details/${tacoDetails.id}`}>
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
      </fieldset>
    </div>
  )
}
