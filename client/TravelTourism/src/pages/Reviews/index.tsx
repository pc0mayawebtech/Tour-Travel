import { Swiper, SwiperSlide } from "swiper/react"
import Footer from "../../shared-components/footer"
import Header from "../../shared-components/header"
import "./index.css"
import HomeTestimonial from "../../constant/hometestinomial"
import { Autoplay } from "swiper/modules"
import Flightreview from "../Flighthotel/flighthotelreview"


const Reviews=()=>{
      window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
   
    return(
        <>
        <Header/>
        <div>
        <section className='Testinomial'>
            <div className='p-5 mb-5'>
               <p className='testiInfo'>Testimonials</p>
               <h2 className='testCont'>Customers Feedback</h2>
            </div>
            <Swiper
               spaceBetween={25}
               slidesPerView={4}
               autoplay={{ delay: 3000, disableOnInteraction: false }}
               modules={[Autoplay]}
               onSlideChange={() => console.log('slide change')}
               onSwiper={(swiper) => console.log(swiper)}
             className="container ">
               {
                  HomeTestimonial.map((item, id) => {
                     return (
                        <SwiperSlide key={id}>
                           <div className='outerWrapperTesti' key={id}>
                              <div className='subInnerTestiBox mb-3'>
                                 <label>
                                    <img src={item.logo} alt={item.logo} className='testilogo' loading='lazy' />
                                 </label>
                                 <div>
                                    <h4 className='testName'>{item.title}</h4>
                                    <p className='testProfession'>{item.profession}</p>
                                 </div>
                              </div>
                              <p className='testInfo mb-0'>{item.description}</p>
                           </div>
                        </SwiperSlide>
                     )
                  })
               }
            </Swiper>

         </section>
         <div className="container">
         <div className="customerReview">
            <div className="reviewsAboutServices">
              <h3>Overheard from travelers</h3>
            </div>
            <div className="row reviewsByCustomer">
              <Flightreview
                hotelname="Hotel Granvia Kyoto"
                place="in Japan"
                name="Diane from the United States"
                text="Our family was traveling via bullet train between cities in
                 Japan with our luggage - the location for this hotel made"
              />
              <Flightreview
                hotelname="Novotel Rotorua Lakeside "
                place="in New Zealand"
                name=" Michael from Australia"
                text='"Started with stress, ended with joy.
                 Thanks Agoda."'
              />
              <Flightreview
                hotelname="Fairmont Singapore"
                place="in Singapore"
                name="Malvin from Singapore"
                text="The hotel was simple amazing and I couldn't thank Agoda more for helping out."
              />
            </div>
          </div>
        </div>
            </div>

        <Footer/>
        </>
    )
}

export default Reviews