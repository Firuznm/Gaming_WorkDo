import React from 'react'
// import style
import "./BestProBlog.scss"
// component import
import BtnTransparent from '../../Components/BtnTransparent/BtnTransparent'
// react slick slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import my write api
import { BestProBlogApi } from '../../MyWriteSiteDatas/Datas';
import BtnMini from '../../Components/BtnMini/BtnMini';

function BestProBlog() {
	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "0",
		slidesToShow: 6,
		speed: 300,
		rows: 2,
		slidesPerRow: 1,
		responsive: [
			{
				breakpoint: 1850,
				settings: {
				  slidesToShow: 5,    
				}
			  },
			{
			  breakpoint: 1540,
			  settings: {
				slidesToShow: 4,     
			  }
			},
			{
				breakpoint: 950,
				settings: {
				  slidesToShow: 3,     
				}
			  },
			  {
				breakpoint: 700,
				settings: {
				  slidesToShow: 2,     
				}
			  },
			  {
				breakpoint: 470,
				settings: {
				  slidesToShow: 1,     
				}
			  },
		
		
		      ]	
	  };
  return (
	<section id='best-blog'>
		<div className="container">
			<div className="best-blog-head">
				<h4 className='blog-title'>
				Best Pro <span className='color-title'>Gaming Blog</span> 
				</h4>
				<p className='blog-info'>Gaming Product means any intangible asset, good or interest that can be bought or sold or otherwise is the subject of an activity constituting a Gaming Business.</p>
				<div className="blog-btn">
					<BtnTransparent title={"show more"}/>
				</div>
			</div>   
			</div>
			<div className='slider-container'>
			<Slider {...settings}>
		{
			BestProBlogApi.map(item=>(
			<div className='blog-cart' key={item.id}>  
				<div className='blog-cart-img-wrap'>
				<img className='blog-cart-img' src={item.img} alt={item.title} />
				  <button className='new-btn'>news</button>
				  <span className='blog-cart-date'>{item.date}</span>
				</div> 
				  <h3 className='blog-cart-title'>{item.title}...</h3>
			      <span className='blog-cart-author'>AUTHOR:{item.author}</span>
			      <div className='blog-add-btn'><BtnMini title={"Read More"}/></div>
		   </div>
			))
		}
         
           </Slider>
		   </div>
	</section>
  )
}

export default BestProBlog
