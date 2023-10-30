// import style css
import "./BestsellersWeek.scss";
// import swiper slider datas
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from "swiper/modules";


// import component & datas
import { GamingProductsApi } from "../../MyWriteSiteDatas/Datas";
import CartComponent from "../../Components/CartComponent/CartComponent";
import BtnTransparent from "../../Components/BtnTransparent/BtnTransparent";
function BestsellersWeek() {
  return (
    <section id="BestsellersWeek">
      <div className="container">
        <div className="bs-Week-head">
          <h4 className="bs-Week-title">Bestsellers of the week</h4>
          <span className="bs-week-btn">
            <BtnTransparent title={"show products"} />
          </span>
        </div>
      </div>
	  
      <div className="bs-week-slider">
		
        <Swiper
      slidesPerView={5}
      spaceBetween={30}
		  navigation={true}
		  loop={true}
		  centeredSlides={true}
		  modules={[ Pagination, Navigation]}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {GamingProductsApi.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bs-week-praduct">
                <CartComponent
                  bsWeekTitleColor={"white"}
                  bsWeekSelectedBGcolor={"transparent"}
                  key={item.id}
                  product={item}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default BestsellersWeek;
