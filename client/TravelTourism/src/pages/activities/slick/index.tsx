import "./index.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import ActivitiesArray from "../../../constant/topacitivity";
import { FaStar } from "react-icons/fa";
import 'swiper/css';


const Index = () => {
    return (
        <div  className="col-lg-12">
            <Swiper
                slidesPerView={3}
                spaceBetween={100}
                navigation={false}
                autoplay={{ delay: 3000, disableOnInteraction: true }}
                modules={[Navigation, Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(mySwiper) => console.log(mySwiper)}

                // pagination={{
                //     clickable: true,
                // }}
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
                }}
                // modules={[Pagination]}
                className="mySwiper"

            >
                {ActivitiesArray.map((item, id) => (
                    <SwiperSlide key={id}>
                        <div className=" tourLocations" >
                            <div className="locationActivity">
                                <img src={item.image} />
                            </div>
                            <div>
                                <h5 className="acitivityHeading">{item.detail}</h5>
                                <div className="activitySlider">
                                    <FaStar className="activityFont" /><span className="activityRating">{item.ratings}</span>
                                    <span className="activityReview">{item.review} reviews </span>
                                </div>
                                <span className="activityPrice">{item.price}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    );
};

export default Index;
