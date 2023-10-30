import React,{useState} from 'react'
// import style css
import "./GamingCategories.scss"
// import datas
import { GamingCategoriesApi } from '../../MyWriteSiteDatas/Datas'
import BtnTransparent from '../../Components/BtnTransparent/BtnTransparent'
// slick slider datas import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CartComponent from '../../Components/CartComponent/CartComponent';
import BtnMini from '../../Components/BtnMini/BtnMini';

function GamingCategories() {
	const [selectedData, setSelectedData] = useState(GamingCategoriesApi[0]);

    const handleTitleClick = (selectedId) => {
        const newData = GamingCategoriesApi.find(item => item.id === selectedId);
        setSelectedData(newData);
    };

	const settings = {
		className: "center",
		infinite: true,
		centerPadding: "0",
		slidesToShow: 4,
		swipeToSlide: true,
		// speed:50,
		responsive: [
			{
				breakpoint: 1850,
				settings: {
				  slidesToShow: 3,    
				}
			  },
			{
			  breakpoint: 1640,
			  settings: {
				slidesToShow: 3,     
			  }
			},
			{
				breakpoint: 1260,
				settings: {
				  slidesToShow: 2,     
				}
			  },
			  {
				breakpoint: 1000,
				settings: {
				  slidesToShow: 2,     
				}
			  },
			  {
				breakpoint: 880,
				settings: {
				  slidesToShow: 1,     
				}
			  },
			  {
				breakpoint: 820,
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
		<section id='section-GamingCategories'>
			<div className="container">
        <div className='GamingCategories'>
			<div className='title-wrapper'>
            {GamingCategoriesApi.map(item => (
                <div key={item.id} className="title" onClick={() => handleTitleClick(item.id)}>
					<BtnTransparent uzunluq={"250px"} title={item.title}/>
                </div>
            ))}
			</div>
			<div className='description-wrapper'>
			<Slider {...settings}>
            {selectedData.sliderDatas.map(item => (
                <div key={item.id} className="description">
                   <CartComponent product={item}/>
                </div>
            ))}
			 </Slider>
			</div>
        </div>

        <div className='subscribe-section'>
		<div className='subscribe'>

			<h3 className='subscribe-head'>Subscribe newsletter and <span className='get-off'> get -20% off</span></h3>
		    <p className='subscribe-description'>
			Almost three-quarters of dedicated PC gamers say their main motivation to upgrade is improving gaming experiences.
			</p>
			<div className='subscribe-input'>
				<input className='email-inp' type="email" placeholder='Enter email address ...' />
				<button className='btn-subscribe'>
					Subscribe
				</button>
			</div>
		</div>
		<img className='subscribe-img' src="https://gaming-workdo.myshopify.com/cdn/shop/files/subscribe-img.png?v=1670903810" alt="" />
		</div>
		</div>
		</section>
    );
}


export default GamingCategories
