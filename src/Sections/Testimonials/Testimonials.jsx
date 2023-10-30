// import style
import "./Testimonials.scss"
// import Testimonials datas
import { TestimonialsApi } from '../../MyWriteSiteDatas/Datas'
// import slick slider
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
// slider client img
import clientImg from "../../assets/images/client-img.png"
import startImg from "../../assets/images/star.png"

function Testimonials() {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		rtl: true,
		responsive: [
			{
				breakpoint: 1850,
				settings: {
				  slidesToShow: 2,    
				}
			  },
			{
			  breakpoint: 1540,
			  settings: {
				slidesToShow: 2,     
			  }
			},
			{
				breakpoint: 1366,
				settings: {
				  slidesToShow: 2,
				}
			  },
			{
			  breakpoint: 1050,
			  settings: {
				slidesToShow: 1, 
			  }
			},
			{
			  breakpoint: 700,
			  settings: {
				slidesToShow: 1,   
			  }
			},
			{
				breakpoint: 500,
				settings: {
				  slidesToShow: 1,     
				}
			  }
		      ]	
	  };
  return (
	<section id='Testimonials'>
		<div className="container">
			<div className="ts-header-info">
				<h2 className="ts-head">Testimonials</h2>
				<p className="ts-info">A video game console is an electronic device that outputs a video signal or image to display a video game that can be played with a game controller.</p>
			</div>
			<Slider {...settings}>

				{
					TestimonialsApi.map(item=>(
						<div className="ts-slick-slider" key={item.id}>
							<div className="ts-slider">
                            <img className="ts-img" src={item.img} alt={item.title} />
							<div className="ts-product-description">
								<h4 className="ts-title">{item.title}</h4>
								<p className="ts-description">{item.description}</p>
								<div className="client-datas">
                                  <div className="client">
									<img src={clientImg} alt="" />
									 <div className="client-name">
										<h6 className="name">{item.clientName}</h6>
										<span className="client">Client</span>
									 </div>
								  </div>
								  <div className="star">
                                   <img className="str-img" src={startImg} alt="" />
								   <span>4.5</span>/
								   <span>5.0</span>
								  </div>
								</div>
							</div>
							</div>
						</div>
					))
				}

        </Slider>
		         </div>
	</section>
  )
}

export default Testimonials
