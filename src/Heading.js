import React from 'react'

const Heading = () => {
  return (
    <div className='header'>
        <h1 className='heading'>Styling using functional and class component</h1>
        <div className='btn_div'>
            <button className='btn_f'>To see styling in functional component</button>
            <button className='btn_c'>To see styling in class component</button>
        </div>
    </div>
  )
}

export default Heading
