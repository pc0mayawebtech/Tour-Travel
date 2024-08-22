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
                              <GiLifeJacket size={35} className='iconLogo' />
                           </span>
                           <div>
                              <h4 className='subtextHead'>Excellent Security</h4>
                              <p className='subtextCont'>Share the core values and principles that drive your company. Emphasize a commitment to customer.</p>
                           </div>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                           <span className='boxOuterWrappers'>
                              <GiLifeJacket size={35} className='iconLogo' />
                           </span>
                           <div>
                              <h4 className='subtextHead'>Excellent Security</h4>
                              <p className='subtextCont'>Share the core values and principles that drive your company. Emphasize a commitment to customer.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </>
   )
}

export default Home;
