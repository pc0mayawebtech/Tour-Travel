import './index.css';
import Header from '../../shared-components/header';
import SliderCarousal from './slick-carousal';
import { MapPin, ChevronDown, ChevronUp, CalendarDays, Search } from 'lucide-react';
import DatePicker from "react-datepicker";
import Footer from '../../shared-components/footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import OfferChoose from './choose-offer';
import homeabout from '../../../public/Images/homeaboutlogo.png';
import { GiLifeJacket } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";
import { IoEarth } from "react-icons/io5";
import Activities from './popular-activity';
import Journey from './company-journey';
import trip1 from '../../../public/Images/trip1.png'
import trip2 from '../../../public/Images/trip2.png'
import trip3 from '../../../public/Images/trip3.png'
import trip4 from '../../../public/Images/trip4.png'
import trip5 from '../../../public/Images/trip5.png'
import trip6 from '../../../public/Images/trip6.png'
import HomeTestimonial from '../../constant/hometestinomial';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Home = () => {
   const [isView, setIsView] = useState(false);
   const [isShow, setIsShow] = useState(false);
   const [isOpen, setIsOpen] = useState(false)
   const [startDate, setStartDate] = useState(new Date());

   return (
      <>
         <Header />

         <section className='HomeBanner mb-5'>
            <SliderCarousal />
            <div className='bannerBooking'>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xxl-8 col-xl-10 col-lg-11">
                        <div className='bookingLayer'>
                           <div className="row">
                              <div className="col-lg-3">
                                 <div className='d-flex align-items-center gap-3'>
                                    <div className='search-icon-bg'>
                                       <span className='locateIcon'>
                                          <MapPin />
                                       </span>
                                    </div>
                                    <div className='banner-select'>
                                       <p className='innerTextInfo mb-0'>Flying from</p>
                                       <div className='nice-select'>
                                          <span onClick={() => setIsView(!isView)}>Select Location {isView === false ? <ChevronUp className='mx-2' /> : <ChevronDown className='mx-2' />}</span>
                                          {
                                             isView && <ul className='countryList'>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Australia</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Portugal</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Maldives</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>India</Link></li>
                                             </ul>
                                          }

                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-3">
                                 <div className='d-flex align-items-center gap-3'>
                                    <div className='search-icon-bg'>
                                       <span className='locateIcon'>
                                          <MapPin />
                                       </span>
                                    </div>
                                    <div className='banner-select'>
                                       <p className='innerTextInfo mb-0'>Flying to</p>
                                       <div className='nice-select'>
                                          <span onClick={() => setIsShow(!isShow)}>Select Location {isShow === false ? <ChevronUp className='mx-2' /> : <ChevronDown className='mx-2' />}</span>
                                          {
                                             isShow && <ul className='countryList'>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Australia</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Portugal</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>Maldives</Link></li>
                                                <li className='option'><Link to="/" className='countryVisitLink'>India</Link></li>
                                             </ul>
                                          }

                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-3">
                                 <div className='d-flex align-items-center gap-3'>
                                    <div className='banner-select'>
                                       <p className='innerTextInfo mb-0'>Duration</p>
                                       <div className='date-picker-container'>
                                          <DatePicker
                                             selected={startDate}
                                             onChange={(date) => setStartDate(date)}
                                             open={isOpen}
                                             onInputClick={() => setIsOpen(!isOpen)}
                                             className="date-input"
                                          />
                                          <CalendarDays className="calendar-icon" />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-lg-3">
                                 <button type='submit' className='boxWrapper'>
                                    <Search style={{ color: "#ffffff", fontSize: "10px", width: "20px" }} />
                                    <span className='searchText'>Search</span>
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section >

         <section className='chooseUs mb-5'>
            <div className="container">
               <div className='mb-5'>
                  <p className='ChooseUS'>Why choose us</p>
                  <h2 className='InfoData'>Our Unique Offerings</h2>
               </div>
               <div className='row'>
                  <OfferChoose />
               </div>
            </div>
         </section>

         <section className='AboutUs mb-5'>
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <label className='outerWrapperlogo'>
                        <img src={homeabout} alt="homeabout" className='aboutuslogo' loading='lazy' />
                     </label>
                  </div>
                  <div className="col-lg-6">
                     <div>
                        <p className='aboutTextHead'>ABOUT US</p>
                        <h4 className='aboutTextCont'>Discover Limitless Possibilities with Tourigo.</h4>
                     </div>
                     <div className='infoTaskData'>
                        <div className='d-flex align-items-center gap-4 mb-4'>
                           <span className='boxOuterWrappers'>
                              <GiLifeJacket size={35} className='iconLogo' />
                           </span>
                           <div>
                              <h4 className='subtextHead'>Excellent Security</h4>
                              <p className='subtextCont'>Share the core values and principles that drive your company. Emphasize a commitment to customer.</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-4 mb-4'>
                           <span className='boxOuterWrappers'>
                              <CiBadgeDollar size={35} className='iconLogo' />
                           </span>
                           <div>
                              <h4 className='subtextHead'>Cost Efficiency</h4>
                              <p className='subtextCont'>Share the core values and principles that drive your company. Emphasize a commitment to customer.</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                           <span className='boxOuterWrappers'>
                              <IoEarth size={35} className='iconLogo' />
                           </span>
                           <div>
                              <h4 className='subtextHead'>World Wide Route</h4>
                              <p className='subtextCont'>Share the core values and principles that drive your company. Emphasize a commitment to customer.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className='CompanyJourney mb-5'>
            <div className="container">
               <div className='mb-5'>
                  <p className='JourneyInfo'>Company Facts</p>
                  <h2 className='JourneyCont'>Celebrating Our Journey</h2>
               </div>
               <div className='row'>
                  <Journey />
               </div>
            </div>
         </section>

         <section className='Activity mb-5'>
            <div className="container">
               <div className='mb-5'>
                  <p className='activityContInfo'>POPULAR ACTIVITY</p>
                  <h2 className='activityHeadInfo'>Nature is close adventure and very close to nature</h2>
               </div>
               <div className="row">
                  <Activities />
               </div>
            </div>
         </section>

         <section className='TripTour mb-5'>
            <div className="container mb-5">
               <p className='tourInfoCont'>Our Trip</p>
               <h2 className='tourInfoHead'>Experience the Extraordinary Everywhere you Go</h2>
            </div>
            <div className="container">
               <div className="row mb-4">
                  <div className="col-lg-3">
                     <div className='logoWarpper position-relative'>
                        <img src={trip1} alt="trip1" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>2 Tour</span>
                        </Link>
                        <p className='countryInfo'>Bhutan</p>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className='logoWarpper position-relative'>
                        <img src={trip2} alt="trip2" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>3 Tour</span>
                        </Link>
                        <p className='countryInfo'>Italy</p>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className=' logoWarpper position-relative'>
                        <img src={trip3} alt="trip3" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>5 Tour</span>
                        </Link>
                        <p className='countryInfo'>France</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-4">
                     <div className=' logoWarpper position-relative'>
                        <img src={trip4} alt="trip1" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>3 Tour</span>
                        </Link>
                        <p className='countryInfo'>Thailand</p>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className='logoWarpper position-relative'>
                        <img src={trip5} alt="trip2" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>1 Tour</span>
                        </Link>
                        <p className='countryInfo'>London</p>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className='logoWarpper position-relative'>
                        <img src={trip6} alt="trip3" className='triplogo' />
                        <Link to='/' className='SwitchText'>
                           <span className='abtTour'>2 Tour</span>
                        </Link>
                        <p className='countryInfo'>Maldives</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

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
            >
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

         <Footer />
      </>
   )
}

export default Home;
