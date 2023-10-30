import React from 'react'
// import style
import "./BtnTransparent.scss"

function BtnTransparent({title , uzunluq}) {
  return (
<button style={{width:uzunluq}} className='btn-transparent'>
      {title}
</button>
  )
}

export default BtnTransparent   
