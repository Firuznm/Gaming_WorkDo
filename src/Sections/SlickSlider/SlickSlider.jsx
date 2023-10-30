import "./SlickSlider.scss"
// react slick slider import
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SlikcSlider() {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "0 300px",
		slidesToShow: 3,
		speed: 500
	  };
  return (
	<>
	        <Slider {...settings}>
          <div className="sl">
            <h3>1</h3>
          </div>
          <div className="sl">
            <h3>2</h3>
          </div>
          <div className="sl">
            <h3>3</h3>
          </div>
          <div className="sl">
            <h3>4</h3>
          </div>
          <div className="sl">
            <h3>5</h3>
          </div>
          <div className="sl">
            <h3>6</h3>
          </div>
        </Slider>
	</>
  )
}

export default SlikcSlider