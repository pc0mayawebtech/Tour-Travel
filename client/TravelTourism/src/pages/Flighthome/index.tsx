import { useState } from 'react';
import Header from '../../shared-components/header'
import './index.css'
import '../Flighthotel/index.css'
import { CalendarDays, ChevronDown, ChevronUp, MapPin, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Slick from '../Flighthotel/slick';
import Featurehome from '../Flighthotel/featurehome';
import Flightreview from '../Flighthotel/flighthotelreview';
import Destinationoutisdeindia from '../Flighthotel/Destinationoutside';
import Footer from '../../shared-components/footer';
const Flighthome = () => {
    const [isView, setIsView] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header/>
      <div className="flightHotelBanner"></div>
      <section className="HomeBanner mb-5">
        <div className="bannerBooking">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-8 col-xl-10 col-lg-11">
                <div className="bookingLayer">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="search-icon-bg">
                          <span className="locateIcon">
                            <MapPin />
                          </span>
                        </div>
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Flying from</p>
                          <div className="nice-select">
                            <span onClick={() => setIsView(!isView)}>
                              Select Location{" "}
                              {isView === false ? (
                                <ChevronUp className="mx-2" />
                              ) : (
                                <ChevronDown className="mx-2" />
                              )}
                            </span>
                            {isView && (
                              <ul className="countryList">
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Australia
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Portugal
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Maldives
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    India
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="search-icon-bg">
                          <span className="locateIcon">
                            <MapPin />
                          </span>
                        </div>
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Flying to</p>
                          <div className="nice-select">
                            <span onClick={() => setIsShow(!isShow)}>
                              Select Location{" "}
                              {isShow === false ? (
                                <ChevronUp className="mx-2" />
                              ) : (
                                <ChevronDown className="mx-2" />
                              )}
                            </span>
                            {isShow && (
                              <ul className="countryList">
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Australia
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Portugal
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    Maldives
                                  </Link>
                                </li>
                                <li className="option">
                                  <Link to="/" className="countryVisitLink">
                                    India
                                  </Link>
                                </li>
                              </ul>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="d-flex align-items-center gap-3">
                        <div className="banner-select">
                          <p className="innerTextInfo mb-0">Duration</p>
                          <div className="date-picker-container">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="topDestination container">
        <div className="topDestinationHeading">
          <p>Top Destinations in India</p>
        </div>
        <Slick />
      </div>
      <div className="featureHome container">
        <div className="featureHomeHeading">
          <p>Featured homes recommended for you</p>
        </div>
        <Featurehome/>

      </div>
      <div className="review container">
         <div className="reviewHeading">
            <p>Overheard from travelers</p>
         </div>
         <div className="reviewContent">
            <div className="row ">
               
               <Flightreview hotelname="Hotel Granvia Kyoto" place="in Japan" name="Diane from the United States" text="Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made"/>
               <Flightreview hotelname="Novotel Rotorua Lakeside " place="in New Zealand" name=" Michael from Australia" text='"Started with stress, ended with joy. Thanks Agoda."'/>
               <Flightreview hotelname="Fairmont Singapore" place="in Singapore" name="Malvin from Singapore" text="The hotel was simple amazing and I couldn't thank Agoda more for helping out."/>

            </div>
         </div>
      </div>
      <div className="destinationOutside container">
         <div className="destinationOutsideHeading">
            <p>Popular destinations outside India</p>
         </div>
         <Destinationoutisdeindia/>
      </div>
      <Footer/>
    </div>
  )
}

export default Flighthome
