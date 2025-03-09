import React, { useState } from 'react'
import Combo from './Combo/Combo'
import DrinkComponent from './Drink/Drink'
import FormComponent from './FormContent/Form'
import IntroduceContent from './IntroduceContent.js/IntroduceContent'
import Pizza from './Pizza/Pizza'

const Content = () => {
  
  return (
    <>
    <IntroduceContent/>
    <Combo/>
    <Pizza/>
    <DrinkComponent/>
    <FormComponent/>
    </>
  )
}

export default Content