import React from 'react'
// import style
import "./Headset.scss"
// import datas
import { HeadsetApi } from '../../MyWriteSiteDatas/Datas'
import HeadsetComputerCart from '../../Components/HeadsetComputerCart/HeadsetComputerCart'

function Headset() {
  return (
	<section id='headset'>
		<div className="container">
			{
				HeadsetApi.map(item=>(
					<div key={item.id} className='headset-cart'>
						<img className='left-img' src={item.imgLeft} alt="" />
						<HeadsetComputerCart
						title={item.cartCompData.title}
						description={item.cartCompData.description}
						selectType={item.cartCompData.ipnSelectorType}
						selectValue={item.cartCompData.selectorValue}
						regPrice={item.cartCompData.regularPrice}
						salePrice={item.cartCompData.salePrice}
						/>
						<img className='right-img' src={item.imgRight} alt="" />
					</div>
				))
			}
</div>
	</section>
  )
}

export default Headset
