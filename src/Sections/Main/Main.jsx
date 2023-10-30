import React from 'react'
// import style css
import "./Main.scss"
// import imgs    
import mainImgLeft from "../../assets/images/main-header-left.avif";
import mainImgRight from "../../assets/images/main-header.webp";
import BtnMini from '../../Components/BtnMini/BtnMini';
import BtnTransparent from '../../Components/BtnTransparent/BtnTransparent';
import { Link } from 'react-router-dom';
// import components
// import BtnMini from "../BtnMini/BtnMini";
// import BtnTransparent from "../BtnTransparent/BtnTransparent";

function Main() {
  return (
	<section id='main'>
		 <img className="main-left-img" src={mainImgLeft} alt="" />
      <div className="container">
<div className="main-info container">
	<div className="main-color-btn">
		<span className="feature">Featured</span>
		<span className="btn-text">
			New featured collection
		</span>
		<a className="collector" href="">
			\ Gaming.Collector
		</a>
	</div>
<h2 className="main-head">Best 
<span className="pro-gaming">Pro Gaming</span>
Accessories
	</h2>
	<p className="main-description">
		Gaming accessories include gear such as headsets,
		extra controllers, charging stations, memory
		devices, carrying cases and much more.
	</p>
	<div className="main-btn-list">
		<Link to="/allproducts">
		<BtnMini title={"show product"} />
		</Link>
		<BtnTransparent title={"show Collections"} />
	</div>
 </div>
		</div>	
		<img className="main-right-img" src={mainImgRight} alt="" />  
	</section>
  )
}

export default Main
