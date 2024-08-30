
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