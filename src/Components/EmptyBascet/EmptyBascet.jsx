import React from 'react'
// import style css
import "./EmptyBascet.scss"
// import react icon
import {BsCartPlus } from 'react-icons/bs';
function EmptyBascet() {
  return (
	<>
       <BsCartPlus className='empty-icon'/>
       <p className='empty-text'>   Your cart is empty	</p>
	</>
  )
}

export default EmptyBascet
