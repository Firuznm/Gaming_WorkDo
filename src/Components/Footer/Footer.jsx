import React from 'react'
// import style css
import "./Footer.scss"
// react icons
import { TbPointFilled } from 'react-icons/tb';
import { CiYoutube } from 'react-icons/ci';
import { PiMessengerLogoFill } from 'react-icons/pi';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
// import image
import footerImg from "../../assets/images/footer-ring-right.webp"


function Footer() {
  return (
	<section id='footer-section'>
	  <div className="container">   
	  {/* <img className='right-img' src={footerImg} alt="" /> */}
	  {/* <img className='left-img' src={footerImg} alt="" /> */}

		<div className="footer">
			<div className="ftr-left">
		<a className="gaming" href="/">Gaming<TbPointFilled className="point"/></a>

		<p className='ftr-description-header'>
		Reach out & let your <b>mind explore </b> 
		</p>
         <p className='ftr-description'>I also love the challenge of trying to beat a difficult game or master a new skill.</p>
		 <a className='site-date' href="/">© 2023, Gaming WorkDo, Powered by Shopify</a>
		    </div>
			<div className="ftr-navigation">
				<span className='navigation'>NAVIGATION:</span>
					<ul>
						<li><a href="">Search</a></li>
						<li><a href="">All Collections</a></li>
						<li><a href="">All Products</a></li>
						<li><a href="">Article Page</a></li>
						<li><a href="">Blog Page</a></li>
					</ul>
				
			</div>
			<div className="ftr-about">
				<span className='about'>ABOUT US:</span>
				<ul>
						<li><a href="">About Us</a></li>
						<li><a href="">Contact with us</a></li>
						<li><a href="">FAQ's</a></li>
						<li><a href="">Privacy Policy</a></li>
						<li><a href="">Shipping & Delivery</a></li>
						<li><a href="">Terms & Conditions</a></li>
					</ul>
			</div>
			<div className="ftr-social">
				<span className='share'>SHARE:</span>
				<a className='youtube' href=""><CiYoutube className='social-icon'/></a>
				<a className='mesanger' href=""><PiMessengerLogoFill className='social-icon'/></a>
				<a className='instagram' href=""><FaInstagram className='social-icon'/></a>
				<a className='twitter' href=""><FaTwitter className='social-icon'/></a>
			</div>
		</div>
	  </div>
	</section>
  )
}

export default Footer
