import React, { useContext } from 'react'
// import style css
import "./BtnMini.scss"

function BtnMini({title,pad,}) {
 
  return (
	<button
    style={pad}
  className='mini-btn'>   
      {title}
	</button>
  )
}

export default BtnMini  
