import React, { Component } from 'react'

export class Class_comp extends Component{
    render(){
       return( 
       <div className='classC'>
           <h1 className='h1'>This is created using class component</h1>
           <p>This is done using external CSS</p>
           <p style={{color:'blue'}}>This is done using inline CSS</p>
       </div>
       )
    }
}



