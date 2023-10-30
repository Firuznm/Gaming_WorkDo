import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import style css
import "./Details.scss"
// import datas
import { GamingProductsApi } from '../../MyWriteSiteDatas/Datas'
import BtnMini from '../../Components/BtnMini/BtnMini'
import { GlobalContext } from '../../Context/Context'

function Details() {
	const {addToCart} =useContext(GlobalContext)
	const {title}=useParams()
	useEffect(()=>{
     window.scrollTo(0,0) 
	},[])
     
  return (
	<section id='Details-section'>
		<div className="container">
         {
			GamingProductsApi.filter(item => 
				item.title=== title).map(product=>(
	<div key={product.id} className='onClick-pr-data'>
		<div className='onClick-pr-info'>
			<h2 className='onClick-pr-head'>{product.title}</h2>
			<p className='product-type'>TYPE : {product.type}</p>
			<p className='product-description'>{product.description}</p>
			<span className='product-price'>Product Price : {product.price} USD</span>
			<span className='sale'>Product Price Sale : </span><span className='product-sale'>{product.sale} USD</span>
			<div className='product-add-buy'>
			<span onClick={()=>addToCart(product)} className='praduct-add'><BtnMini title={"Add to Cart"}/></span>
			<span className='product-buy'><BtnMini title={"Buy it now"}/></span>
			</div>
		</div>
		<div className='onClick-pr-img'>
			<img src={product.coverImg} alt="" />
		</div>
	</div>
				))
		 }
		</div>
	    
	</section>
  )
}

export default Details
