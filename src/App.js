/* eslint-disable react/jsx-pascal-case */
import React,{Component} from 'react'

import Functional_comp from './Functional_comp.js'
import {Class_comp} from './Class_comp.js'
import './handson1.css'

class App extends Component  {
  constructor(){
    super();
    this.state={
      show_fcomp:false,
      show_compc:false
    }
  }

  show_func(){
    this.setState(
      {show_fcomp:!this.state.show_fcomp}
    )
    } 
    show_class(){
      this.setState(
        {show_compc:!this.state.show_compc}
      )
  }

  render(){
    
    return (
      <>
        <h1 className='heading'>Styling using Functional and Class Component</h1>
        <div className="btn_div">
          <button className='btn_f' onClick={()=>this.show_func()}>To see Styling in Functional component</button>
          <button className='btn_c' onClick={()=>this.show_class()}>To see Styling in Class component</button>
        </div>
        <div className='comp_div'>
          {this.state.show_fcomp? <Functional_comp/> : null}
          {this.state.show_compc? <Class_comp/>  : null}
        </div>
      
      </>
    )  
  }
}

export default App
