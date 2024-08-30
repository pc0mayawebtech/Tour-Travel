import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Flightpromotiondata from '../../../constant/flighthotelflightpromotion';
const Flightpromotion = () => {
  return (
    <div>
       <Swiper
      spaceBetween={20}
      slidesPerView={3}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        425: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1440:{
          slidesPerView: 3,
            spaceBetween: 50,
        },
    }}
    >
       {Flightpromotiondata.map((item, id) => (
        <SwiperSlide key={id}>
          <div className='promotionAccomodation'>
          <div className='promotionAccomodationImage'>
             <img src={item.image} alt="image" />
          </div>
          
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
    </div>
  )
}

export default Flightpromotion

