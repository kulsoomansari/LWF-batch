import React from 'react'
import { CompB } from './CompB'

export const CompA = ({name}) => {
  return (
    <>
    <CompB value = {name}/>
    </>
  )
}
