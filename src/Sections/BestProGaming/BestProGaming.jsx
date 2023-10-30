import React from 'react'
// import style
import "./BestProGaming.scss"
// best api import
import { BestProGameApi } from '../../MyWriteSiteDatas/Datas'


import HeadsetComputerCart from '../../Components/HeadsetComputerCart/HeadsetComputerCart'
import BtnTransparent from '../../Components/BtnTransparent/BtnTransparent'

function BestProGaming() {
  return (
	<section id='best-pro'>
		<div className='best-pro-head container'>
			<h2 className='best-head'>Best Pro Gaming Products</h2>
			<p className='best-info'>More powerful hardware not only betters their experiences in games they're currently playing, but it also gives many players access to titles with more demanding specifications.</p>
			<div className='btn-transparent-component'>
			<BtnTransparent title={"show products"}/>
			</div>
			</div>
				{
                  BestProGameApi.map(item=>(
					<div className='container-full' key={item.id}>
                    <div className='best-pro-main' >
                   	<img className='left-img' src={item.imgLeft} alt="" />
						<HeadsetComputerCart
						title={item.cartCompData.title}
						description={item.cartCompData.description}
						selectType={item.cartCompData.ipnSelectorType}
						selectValue={item.cartCompData.selectorValue}
						regPrice={item.cartCompData.regularPrice}
						salePrice={item.cartCompData.salePrice}
						regcolor={"white"}
						/>
						<img className='right-img' src={item.imgRight} alt="" />
					</div>
					</div>
				  ))
				}
			
		
	
	  
	</section>
  )
}

export default BestProGaming
