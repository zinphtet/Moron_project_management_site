
import React from 'react'

import './Button.scss';
function Button({title='Login',type='submit',handleClick}) {
  return (
    <button className='btn' type={type} onClick={handleClick}>
        {title}
    </button>
  )
}

export default Button