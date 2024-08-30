import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Topdestination from '../../../constant/flighthotel';
import './index.css'

const Slick = () => {
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
       {Topdestination.map((item, id) => (
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

export default Slick