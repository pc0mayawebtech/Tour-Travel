import './index.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import HomeSlider from '../../../constant/homeslider';

const SliderCarousal = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {HomeSlider.map((item, id) => (
        <SwiperSlide key={id}>
          <div className='sliderOuterBox' style={{ backgroundImage: `url(${item.image})` }} >
            <div className='row justify-content-center'>
              <div className="col-lg-9">
                <div className='ContentBox'>
                  <h1 className='innerInfoContent'>
                    {item.title1} <span>{item.spantitle}</span> {item.title3}
                  </h1>
                  <p className='innerInfoDescript'>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SliderCarousal;
