import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

// import style css
import "./About.scss"
// import react icon
import { BiArrowBack } from 'react-icons/bi';



function About() {
	useEffect(()=>{
     window.scrollTo(0,0)
	},[])
  return (
	<section id='about'>
		<div className="container-full">
			<div className='about-head'>
			<Link to={"/"} className="back-home-link"><span className='back-icon'><BiArrowBack/></span>Back to Home</Link>
			<h3 className='about-info-head'>About Us</h3>
			<p className='about-info'>The gaming industry continues to push the boundaries of innovation, offering virtual reality experiences that blur the lines between the real and the digital.</p>
			</div>
			</div>
			<div className="container">
				<h2 className='Fantasy-Reality-head'>Where Fantasy and Reality Collide</h2>
				<div className='Fantasy-Reality-info'>
				<p className='Fantasy-Reality-info-left'>
				Prepare to embark on thrilling gaming journeys that transport you to uncharted territories, distant galaxies, and epic battlegrounds. Our gaming paradise offers an unparalleled blend of excitement, competition, and camaraderie, inviting players of all levels to unleash their inner warriors and embrace the exhilaration of play. Immerse yourself in cutting-edge graphics, captivating storylines, and dynamic gameplay that push the boundaries of what's possible. From action-packed shooters that demand lightning-fast reflexes to immersive role-playing games that invite you to shape your destiny, our collection of games spans genres and offers endless possibilities.
				</p>
				<p className='Fantasy-Reality-info-right'>
				Whether you're a seasoned pro or a novice explorer, our gaming environment provides a space for both competition and collaboration. Connect with fellow gamers from around the world, form alliances, and embark on quests together, or go head-to-head in intense multiplayer battles that test your skills and strategies. Experience gaming like never before with our state-of-the-art technology and high-performance equipment. Immerse yourself in vivid worlds through cutting-edge virtual reality experiences or feel the precision and responsiveness of our top-of-the-line gaming accessories.
				</p>
				</div>
			
			<h2 className="Immersive-head">
			Immersive Gaming Adventures: Unleash the Power of Play
			</h2>
			
			<div className='Explore'>
				<div className='Explore-info'>
					<h5 className='explore-head'>Explore the Ultimate Gaming Experience</h5>
					<p className='explore-descrp'>
					We're dedicated to providing an unrivaled gaming experience that leaves you fully immersed and connected to the digital realms you love. But gaming is more than just entertainment; it's a community. Join us in fostering a vibrant and inclusive gaming culture that celebrates diversity and empowers players to connect, compete, and grow. Share your achievements, engage in lively discussions, and forge lasting friendships with like-minded gamers who share your passion and enthusiasm.
					<br/> <br/> 
					Whether you seek the adrenaline rush of competitive gaming, the exploration of vast virtual landscapes, or the joy of unraveling intricate puzzles, our gaming offerings cater to your every desire. Unlock your potential, unleash your creativity, and embark on unforgettable gaming adventures that will keep you captivated for hours on end.
					</p>
				</div>
				<img className='explore-img' src="https://gaming-workdo.myshopify.com/cdn/shop/files/abt-1.jpg?v=1671606891" alt="" />
			</div>
			<div className='Dive'>
				<img className='dive-img' src="https://gaming-workdo.myshopify.com/cdn/shop/files/abt-2.jpg?v=1671606911" alt="" />
		
			<div className='dive-info'>
			<h5 className='dive-head'>
			Dive into the World of Gaming Excellence
			</h5>
			<p className='dive-description'>
			Dive into the visually stunning landscapes and intricately designed worlds that push the boundaries of realism. From meticulously crafted characters to breathtaking environments, our games transport you to immersive digital realms that blur the line between fiction and reality. Our gaming platform caters to players of all skill levels, offering a range of difficulty settings and customizable options. Whether you're a seasoned gamer seeking a new challenge or a casual player looking to unwind and have fun, there's a game waiting for you to embark on your next adventure.
			<br/> <br/>
			Join a vibrant community of fellow gamers who share your passion and enthusiasm. Connect, compete, and collaborate as you forge new friendships, exchange strategies, and celebrate victories together. Our gaming platform is not just about the games; it's about the connections and camaraderie that thrive within this dynamic world.
			</p>
			</div>
			</div>
		
		      <div className='about-services'>
				<h3 className='about-service-head'>
				About our services
				</h3>
				<p className='about-service-info'>
				Our mission is to empower individuals with knowledge and facilitate meaningful connections through our platform.We understand the importance of reliable and up-to-date information in today's fast-paced world.
				</p>
				<div className='about-service-cart'>
					<div className='about-cart'>
						<div className='cart-head-icon'>
							<h4>Fast delivery</h4>
								<img className='about-cart-icon' src="https://gaming-workdo.myshopify.com/cdn/shop/files/1_8278e215-a6b4-4abe-8a33-e6cc48f5fdad_24x24.png?v=1671607627s" alt="" />
						</div>
						<p className='cart-info'>
						The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.
						</p>
					</div>

					<div className='about-cart'>
						<div className='cart-head-icon'>
							<h4>Many offers</h4>
								<img className='about-cart-icon' src="https://gaming-workdo.myshopify.com/cdn/shop/files/2_99357864-c2be-4dd7-a53b-d18e15c99cb9_24x24.png?v=1671607635" alt="" />
						</div>
						<p className='cart-info'>
						The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.
						</p>
					</div>

					<div className='about-cart'>
						<div className='cart-head-icon'>
							<h4>Fast delivery</h4>
								<img className='about-cart-icon' src="https://gaming-workdo.myshopify.com/cdn/shop/files/3_ae0a0760-7aab-4cf4-829a-a170edd317cb_24x24.png?v=1671607645" alt="" />
						</div>
						<p className='cart-info'>
						The specific delivery time will vary depending on the shipping address and the selected delivery option. Customers can track their order online to see the estimated delivery date.
						</p>
					</div>
					
				</div>
			  </div>
			</div>
	</section>
  )
}

export default About
