import { ReactNode } from 'react'

import { ITacoData } from '../../utils/utilites'
import './TacoDetails.css'

interface IProps {
  displayText: ReactNode,
  tacoDetails: ITacoData
}

export default function TacoDetails({displayText, tacoDetails}: IProps) {
  return (
    <div></div>
  )
}
