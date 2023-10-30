import React from 'react'
// import style
import "./GamingProducts.scss"
// component import
import BtnTransparent from '../../Components/BtnTransparent/BtnTransparent'
// slick slider datas
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// my write data import
import { GamingProductsApi } from '../../MyWriteSiteDatas/Datas'
import CartComponent from '../../Components/CartComponent/CartComponent'

function GamingProducts() {
	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "0",
		slidesToShow: 5,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1850,
				settings: {
				  slidesToShow: 5,    
				}
			  },
			{
			  breakpoint: 1640,
			  settings: {
				slidesToShow: 4,     
			  }
			},
			{
				breakpoint: 1260,
				settings: {
				  slidesToShow: 3,     
				}
			  },
			  {
				breakpoint: 940,
				settings: {
				  slidesToShow: 2,     
				}
			  },
			  {
				breakpoint: 650,
				settings: {
				  slidesToShow: 1,         
				}
			  },  
		      ]	
	  };
  return (
	<section id='GamingProducts'>
		<div className="container">
			<div className='GamingProducts-head'>
				<h4 className='gamingPro-title'>Best Pro Gaming Products</h4>
                <p className='gamingPro-info'>With hardware, tools are what enable a person to install, remove, or perform other actions on the components within their computer.</p>
				<span className='game-btn'>
                  <BtnTransparent title={"show products"}/>
				  </span>
			</div>
			<div className='gamingPro-slider'>
			<Slider {...settings}>
				{GamingProductsApi.map(product=>(
					<div key={product.id}>
                        <CartComponent   product={product} />
					</div>
				))}
			  
           </Slider>
              
			</div>
		</div>
	  
	</section>
  )
}

export default GamingProducts
