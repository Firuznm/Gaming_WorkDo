import React from 'react'
// import style css
import "./OurShop.scss"

import { OurShopApi } from '../../MyWriteSiteDatas/Datas'

function OurShop() {
  return (
	<section id='ourShip-section'>
		<div className="container">
			<h4>About our shop</h4>
			<p>Gaming can help to improve cognitive skills such as problem-solving, memory, and attention.</p>
			<div className="ourShopCarts">
				{
					OurShopApi.map(item=>(
				<div className="our-shop-cart" key={item.id}>
                 <span className='our-number'>{item.num}</span>
				 <h2 className='our-shop-header'>{item.header}</h2>
				 <p className='our-description'>{item.description}</p>
				</div>
					))
				}
			
			</div>
		</div>
	  
	</section>
  )
}

export default OurShop
