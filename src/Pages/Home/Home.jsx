import React from 'react'
import OurShop from '../../Sections/OurShop/OurShop'
import Testimonials from '../../Sections/Testimonials/Testimonials'
import Headset from '../../Sections/Headset/Headset'
import BestProGaming from '../../Sections/BestProGaming/BestProGaming'
import BestProBlog from '../../Sections/BestProBlog/BestProBlog'
import BestsellersWeek from '../../Sections/BestsellersWeek/BestsellersWeek'
import GamingProducts from '../../Sections/GamingProducts/GamingProducts'
import GamingCategories from '../../Sections/GamingCategories/GamingCategories'
import Main from '../../Sections/Main/Main'
// import SlikcSlider from '../../Sections/SlickSlider/SlickSlider'

function Home() {
  return (
	<div>
		<Main/>
		<BestsellersWeek/>
		<GamingCategories/>
		<BestProBlog/>
		<BestProGaming/>
		<Headset/>
		{/* <SlikcSlider/> */}
		<GamingProducts/>
		<OurShop/>
		<Testimonials/>
	  
	</div>
  )
}

export default Home
