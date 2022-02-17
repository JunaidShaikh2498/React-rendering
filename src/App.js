/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Heading from './Heading.js'
import Functional_comp from './Functional_comp.js'
import {Class_comp} from './Class_comp.js'
import './handson1.css'


const App = () => {
  return (
    <>
      <Heading/>
      <div className='comp_div'>
      <Functional_comp/>
      <Class_comp/>
      </div>
    </>
  )
}
export default App
