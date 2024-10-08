import './index.css';
import Header from '../../shared-components/header';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SliderCarousal from './slick-carousal';
import { MapPin, CalendarDays, Search } from 'lucide-react';
import DatePicker from "react-datepicker";
import Footer from '../../shared-components/footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import OfferChoose from "./choose-offer";
import homeabout from "../../../public/Images/homeaboutlogo.png";
import { GiLifeJacket } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";
import { IoEarth } from "react-icons/io5";
import Activities from "./popular-activity";
import Journey from "./company-journey";
import trip1 from "../../../public/Images/trip1.png";
import trip2 from "../../../public/Images/trip2.png";
import trip3 from "../../../public/Images/trip3.png";
import trip4 from "../../../public/Images/trip4.png";
import trip5 from "../../../public/Images/trip5.png";
import trip6 from "../../../public/Images/trip6.png";
import HomeTestimonial from "../../constant/hometestinomial";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchResult from "./result-filter";
import { FaAngleDown } from "react-icons/fa";

const Home = () => {
   const navigate = useNavigate();
   const [isOpen, setIsOpen] = useState(false);
   const [startDate, setStartDate] = useState(new Date());
   const [fromResults, setFromResults] = useState([]);
   const [toResults, setToResults] = useState([]);
   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
   const [adultValue, setAdultValue] = useState(1);
   const [childValue, setChildValue] = useState(0);
   const [infantValue, setInfantValue] = useState(0);
   const [dropDown, setDropDown] = useState(false);
   const [isClicked, setIsClicked] = useState("Economy");

   const [submit, setSubmit] = useState({
      flyingfrom: "",
      flyingfromCode: "",
      flyingto: "",
      flyingtoCode: "",
      traveldate: "",
      error: { dataError: "" },
   });

   let debounceTimer: number | undefined;
   const handleChange = (e: { target: { name: string; value: string } }) => {

      console.log(e, 'name')
      const { name, value } = e.target;
      setSubmit((prevalue) => ({
         ...prevalue,
         [name]: value,
      }));
      setIsDropdownVisible(true);

      if (debounceTimer) {
         clearTimeout(debounceTimer);
      }

      debounceTimer = setTimeout(async () => {
         if (name === "flyingfrom") {
            const results = await fetchSuggestions(value);
            setFromResults(results);
         } else if (name === "flyingto") {
            const results = await fetchSuggestions(value);
            setToResults(results);
         }

      }, 300);
   };

   const fetchSuggestions = async (query: string) => {
      try {
         const result = await axios.get('http://localhost:3000/home');
         const filtered = result.data.users.filter((user: { city: string; }) => {
            return user.city.toLowerCase().includes(query.toLowerCase());
         });
         return filtered;
      } catch (error) {
         console.error('Error fetching data:', error);
         return [];
      }
   };


   const handleSubmit = (e: { preventDefault: () => void; }) => {
      const notify = () => {
         toast.success('Data Fetching Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
         })
      };
      const errorNotify = () => {
         toast.error(errors.dataError, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
         })
      };
      e.preventDefault();
      const { flyingfromCode, flyingtoCode, traveldate } = submit;
      const errors = {
         dataError: '',
      }
      let hasErrors = false;

      if (!flyingfromCode || !flyingtoCode || traveldate) {
         errors.dataError = "All field are required";
         hasErrors = true;
      }

      if (hasErrors) {
         errorNotify();
      } else {
         navigate('/airlines', { state: { flyingform: submit.flyingfrom, flyingto: submit.flyingto, traveldate: JSON.stringify(startDate), flyingfromCode: submit.flyingfromCode, flyingtoCode: submit.flyingtoCode, } });
         setSubmit({
            flyingfrom: '',
            flyingfromCode: '',
            flyingto: '',
            flyingtoCode: '',
            traveldate: '',
            error: { dataError: '' }
         });
         notify();
      };
   };

   const handleDropDown = () => {
      setDropDown(!dropDown);
   };
   const decrementAdult = () => {
      if (adultValue <= 1) {
         setAdultValue(1);
      } else {
         setAdultValue(adultValue - 1);
      }
   };

   const incrementAdult = () => {
      if (adultValue >= 8) {
         setAdultValue(8);
      }
      else {
         setAdultValue(adultValue + 1);
      }
   };
   const decrementChild = () => {
      if (childValue <= 0) {
         setChildValue(0);
      } else {
         setChildValue(childValue - 1);
      }
   };
   const incrementChild = () => {
      if (childValue >= 16) {
         setChildValue(16);
      }
      else {
         setChildValue(childValue + 1)
      }
   };

   const decrementInfants = () => {
      if (infantValue <= 0) {
         setInfantValue(0);
      } else {
         setInfantValue(infantValue - 1);
      }
   };

   const incrementInfants = () => {
      if (infantValue >= 8) {
         setInfantValue(8);
      }
      else {
         setInfantValue(infantValue + 1);
      }
   };

   const totalpassengers = adultValue + childValue + infantValue

   const handleClick = (data: any) => {
      setIsClicked(data)
   }
   return (
      <>
         <Header />

         <section className="HomeBanner mb-5">
            <SliderCarousal />
            <div className="bannerBooking">
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-xxl-9 col-xl-10 col-lg-11">
                        <div className="bookingLayer">
                           <form
                              action="/action.php"
                              method="post"
                              onSubmit={handleSubmit}
                           >
                              <div className="row">
                                 <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div className="d-flex align-items-center justify-content-center gap-3">
                                       <div className="search-icon-bg">
                                          <span className="locateIcon">
                                             <MapPin />
                                          </span>
                                       </div>
                                       <div className="banner-select">
                                          <p className="innerTextInfo mb-2">Flying from</p>
                                          <div className="nice-select">
                                             <input
                                                type="search"
                                                name="flyingfrom"
                                                placeholder="Flying from"
                                                value={submit.flyingfrom}
                                                onChange={handleChange}
                                                id="flyingfrom"
                                                className="border-0"
                                             />
                                             {fromResults.length > 0 && (
                                                <SearchResult
                                                   result={fromResults}
                                                   setSubmit={setSubmit}
                                                   fieldName="flyingfrom"
                                                   setIsDropdownVisible={setIsDropdownVisible}
                                                   isDropdownVisible={isDropdownVisible}
                                                />
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-lg-6">
                                    <div className="d-flex align-items-center justify-content-center gap-3">
                                       <div className="search-icon-bg">
                                          <span className="locateIcon">
                                             <MapPin />
                                          </span>
                                       </div>
                                       <div className="banner-select">
                                          <p className="innerTextInfo mb-2">Flying to</p>
                                          <div className="nice-select">
                                             <input
                                                type="search"
                                                name="flyingto"
                                                placeholder="Flying to"
                                                value={submit.flyingto}
                                                onChange={handleChange}
                                                id="flyingto"
                                                className="border-0"
                                             />
                                             {toResults.length > 0 && (
                                                <SearchResult
                                                   result={toResults}
                                                   setSubmit={setSubmit}
                                                   fieldName="flyingto"
                                                   setIsDropdownVisible={setIsDropdownVisible}
                                                   isDropdownVisible={isDropdownVisible}
                                                />
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="bookingLayerTwo">
                                 <div className="row">
                                    <div className="col-lg-6">
                                       <div className="d-flex align-items-center justify-content-center gap-3">
                                          <div className="banner-select">
                                             <p className="innerTextInfo calenderText mb-2">
                                                Duration
                                             </p>
                                             <div className="date-picker-container">
                                                <DatePicker
                                                   selected={startDate}
                                                   placeholderText="Enter Date"
                                                   onChange={(date) => {
                                                      setStartDate(date);
                                                   }}
                                                   open={isOpen}
                                                   onInputClick={() => setIsOpen(!isOpen)}
                                                   className="date-input p-2"
                                                />
                                                <CalendarDays className="calendar-icon" />
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="col-lg-6">
                                       <div className="d-flex align-items-center justify-content-center gap-3">
                                          <div className="banner-select">
                                             <p className="innerTextInfo passengerText mb-2">
                                                Passenger, Economy
                                             </p>
                                             <div
                                                className="bookingDropdown"
                                                onClick={handleDropDown}
                                             >
                                                <p> {totalpassengers} Passengers, {isClicked} </p>
                                                <p>
                                                   <FaAngleDown />
                                                </p>
                                             </div>
                                             {dropDown && (
                                                <div className="bookingDropdownItem">
                                                   <div className="dropDownMenu">
                                                      <span
                                                         className="sign"
                                                         onClick={decrementAdult}
                                                      >
                                                         -
                                                      </span>
                                                      <span className="dropDownMenuText">
                                                         <p className="totalPerson">{adultValue}</p>
                                                         <p>Adult(12years or above)</p>
                                                      </span>
                                                      <span
                                                         className="sign"
                                                         onClick={incrementAdult}
                                                      >
                                                         +
                                                      </span>
                                                   </div>
                                                   <div className="dropDownMenu">
                                                      <span
                                                         className="sign"
                                                         onClick={decrementChild}
                                                      >
                                                         -
                                                      </span>
                                                      <span className="dropDownMenuText">
                                                         <p className="totalPerson">{childValue}</p>
                                                         <p>Children (2-11 yrs)</p>

                                                      </span>
                                                      <span
                                                         className="sign"
                                                         onClick={incrementChild}
                                                      >
                                                         +
                                                      </span>
                                                   </div>
                                                   <div className="dropDownMenu">
                                                      <span
                                                         className="sign"
                                                         onClick={decrementInfants}
                                                      >
                                                         -
                                                      </span>
                                                      <span className="dropDownMenuText">
                                                         <p className='totalPerson'>{infantValue}</p>
                                                         <p>Infants (below 2yrs)</p>
                                                      </span>
                                                      <span
                                                         className="sign"
                                                         onClick={incrementInfants}
                                                      >
                                                         +
                                                      </span>
                                                   </div>
                                                   <div className='dropDownMenu mb-1'>
                                                      <div className="row">
                                                         <div className="col-lg-6">
                                                            <button className={`behindColor ${isClicked === 'Economy' && 'activebehindColor'}`} onClick={() => handleClick("Economy")}>Economy</button>
                                                         </div>
                                                         <div className="col-lg-6">
                                                            <button className={`behindColor ${isClicked === 'Premium Economy' && 'activebehindColor'}`} onClick={() => handleClick("Premium Economy")}>Premium Economy</button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div className='dropDownMenu mb-3'>
                                                      <div className="row">
                                                         <div className="col-lg-6">
                                                            <button className={`behindColor ${isClicked === 'Buisness' && 'activebehindColor'}`} onClick={() => handleClick("Buisness")}>Buisness</button>
                                                         </div>
                                                         <div className="col-lg-6">
                                                            <button className={`behindColor ${isClicked === 'First' && 'activebehindColor'}`} onClick={() => handleClick("First")}>First</button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             )}
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              <div className="row align-items-center justify-content-center">
                                 <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                                    <button type="submit" className="boxWrapper">
                                       <Search
                                          style={{
                                             color: "#ffffff",
                                             fontSize: "10px",
                                             width: "20px",
                                          }}
                                       />
                                       <span className="searchText">Search</span>
                                    </button>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="chooseUs mb-5">
            <div className="container">
               <div className="mb-5">
                  <p className="ChooseUS">Why choose us</p>
                  <h2 className="InfoData">Our Unique Offerings</h2>
               </div>
               <div className="row">
                  <OfferChoose />
               </div>
            </div>
         </section>

         <section className="AboutUs mb-5">
            <div className="container">
               <div className="row">
                  <div className="col-lg-6">
                     <label className="outerWrapperlogo">
                        <img
                           src={homeabout}
                           alt="homeabout"
                           className="aboutuslogo"
                           loading="lazy"
                        />
                     </label>
                  </div>
                  <div className="col-lg-6">
                     <div>
                        <p className="aboutTextHead">ABOUT US</p>
                        <h4 className="aboutTextCont">
                           Discover Limitless Possibilities with Tourigo.
                        </h4>
                     </div>
                     <div className="infoTaskData">
                        <div className="d-flex align-items-center gap-4 mb-4">
                           <span className="boxOuterWrappers">
                              <GiLifeJacket size={35} className="iconLogo" />
                           </span>
                           <div>
                              <h4 className="subtextHead">Excellent Security</h4>
                              <p className="subtextCont">
                                 Share the core values and principles that drive your
                                 company. Emphasize a commitment to customer.
                              </p>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-4 mb-4">
                           <span className="boxOuterWrappers">
                              <CiBadgeDollar size={35} className="iconLogo" />
                           </span>
                           <div>
                              <h4 className="subtextHead">Cost Efficiency</h4>
                              <p className="subtextCont">
                                 Share the core values and principles that drive your
                                 company. Emphasize a commitment to customer.
                              </p>
                           </div>
                        </div>
                        <div className="d-flex align-items-center gap-4">
                           <span className="boxOuterWrappers">
                              <IoEarth size={35} className="iconLogo" />
                           </span>
                           <div>
                              <h4 className="subtextHead">World Wide Route</h4>
                              <p className="subtextCont">
                                 Share the core values and principles that drive your
                                 company. Emphasize a commitment to customer.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="CompanyJourney mb-5">
            <div className="container">
               <div className="mb-5">
                  <p className="JourneyInfo">Company Facts</p>
                  <h2 className="JourneyCont">Celebrating Our Journey</h2>
               </div>
               <div className="row">
                  <Journey />
               </div>
            </div>
         </section>

         <section className="Activity mb-5">
            <div className="container">
               <div className="mb-5">
                  <p className="activityContInfo">POPULAR ACTIVITY</p>
                  <h2 className="activityHeadInfo">
                     Nature is close adventure and very close to nature
                  </h2>
               </div>
               <div className="row">
                  <Activities />
               </div>
            </div>
         </section>

         <section className="TripTour mb-5">
            <div className="container mb-5">
               <p className="tourInfoCont">Our Trip</p>
               <h2 className="tourInfoHead">
                  Experience the Extraordinary Everywhere you Go
               </h2>
            </div>
            <div className="container">
               <div className="row mb-4">
                  <div className="col-lg-3">
                     <div className="logoWarpper position-relative">
                        <img src={trip1} alt="trip1" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">2 Tour</span>
                        </Link>
                        <p className="countryInfo">Bhutan</p>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="logoWarpper position-relative">
                        <img src={trip2} alt="trip2" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">3 Tour</span>
                        </Link>
                        <p className="countryInfo">Italy</p>
                     </div>
                  </div>
                  <div className="col-lg-3">
                     <div className=" logoWarpper position-relative">
                        <img src={trip3} alt="trip3" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">5 Tour</span>
                        </Link>
                        <p className="countryInfo">France</p>
                     </div>
                  </div>
               </div>

               <div className="row">
                  <div className="col-lg-4">
                     <div className=" logoWarpper position-relative">
                        <img src={trip4} alt="trip1" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">3 Tour</span>
                        </Link>
                        <p className="countryInfo">Thailand</p>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="logoWarpper position-relative">
                        <img src={trip5} alt="trip2" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">1 Tour</span>
                        </Link>
                        <p className="countryInfo">London</p>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="logoWarpper position-relative">
                        <img src={trip6} alt="trip3" className="triplogo" />
                        <Link to="/" className="SwitchText">
                           <span className="abtTour">2 Tour</span>
                        </Link>
                        <p className="countryInfo">Maldives</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="Testinomial">
            <div className="p-5">
               <p className="testiInfo">Testimonials</p>
               <h2 className="testCont">Customers Feedback</h2>
            </div>
            <Swiper
               spaceBetween={25}
               slidesPerView={4}
               autoplay={{ delay: 3000, disableOnInteraction: false }}
               modules={[Autoplay]}
               onSlideChange={() => console.log("slide change")}
               onSwiper={(swiper) => console.log(swiper)}
            >
               {HomeTestimonial.map((item, id) => {
                  return (
                     <SwiperSlide key={id}>
                        <div className="outerWrapperTesti" key={id}>
                           <div className="subInnerTestiBox mb-3">
                              <label>
                                 <img
                                    src={item.logo}
                                    alt={item.logo}
                                    className="testilogo"
                                    loading="lazy"
                                 />
                              </label>
                              <div>
                                 <h4 className="testName">{item.title}</h4>
                                 <p className="testProfession">{item.profession}</p>
                              </div>
                           </div>
                           <p className="testInfo mb-0">{item.description}</p>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </section>

         <Footer />
      </>
   );
};

export default Home;
