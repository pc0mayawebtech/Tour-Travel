
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../PromotionSlick/index.css'
import Outsidedestination from '../../../constant/flighthoteldestinationoutside';

const Destinationoutisdeindia = () => {
  return (
   <>
   <Swiper
      spaceBetween={20}
      slidesPerView={5}
      modules={[Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        425: {
            slidesPerView:1.3,
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
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 50,
      },
    }}
    >
       {Outsidedestination.map((item, id) => (
        <SwiperSlide key={id}>
          <div className='topDestinationSlide'>
          <div className='topDestinationImage'>
             <img src={item.image} alt="image" />
          </div>
          <div className="destinationContent">
            <p>{item.place}</p>
            <label>{item.accomodation} accomodation</label>
          </div>
          </div>
        </SwiperSlide>
      ))}

    </Swiper>
   </>
  )
}

export default Destinationoutisdeindia