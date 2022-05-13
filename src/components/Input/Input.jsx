import React from 'react'
import './Input.scss';
function Input({id='default',label='default',type='text'}) {
  return (
    <div className="input-group">
        <label htmlFor={id} className='label'>{label}:</label>
        <input id={id} type={type} className='input'/>
    </div>
  )
}

export default Input