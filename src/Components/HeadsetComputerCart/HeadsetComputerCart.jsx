import React from 'react'
// import style
import "./HeadsetComputerCart.scss"
import BtnMini from '../BtnMini/BtnMini'

function HeadsetComputerCart({title,description,selectType,selectValue,regPrice,salePrice,regcolor}) {
  return (
	<div className='head-comp-cart'>
		<h4 className='hd-com-title'>{title}</h4>
		<p className='hd-com-descr'>{description}</p>
		<span className='selectType'>{selectType}:</span>
		<select className='select' name="" id="">
			{
				 selectValue.map((item,index)=>(
					<option key={index} value="">{item}</option>
				))
			}
		</select>
	    <div className='price-add-cart'>   
			<div className='price'>
				<span style={{ color: regcolor}} className='reg-price'>{regPrice} USD</span>
			{salePrice ? <span className='sale-price'>{salePrice} USD</span> : "" }	
			</div>
			<BtnMini title={"Add to cart"}/>
		</div>
	</div>
  )
}

export default HeadsetComputerCart
