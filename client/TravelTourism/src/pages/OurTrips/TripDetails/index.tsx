import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  MapPin,
  Search,
} from "lucide-react";
import Header from "../../../shared-components/header";
import "./index.css";
import DatePicker from "react-datepicker";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../../shared-components/footer";
import TripDetails from "../../../constant/OurTripDetails";
import Aos from "aos";
import "aos/dist/aos.css";
import Slick from "../../Flighthotel/slick";
import Promotionslick from "../../Flighthotel/PromotionSlick";

const MoreTripDetails = () => {
  const [isView, setIsView] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const navigate= useNavigate()

  window.scrollTo({
    top: 0,
    left: 100,
    behavior: "smooth",
  });

  useEffect(() => {
    Aos.init({
      duration:1500,
        once: true,
    });
    
  }, []);

  const handleClick=()=>{
    navigate("/flighthotel?scrollTo=featuredHome")

  }

  return (
    <>
      <Header />

      <div className="flightHotelBanner"></div>
      <section className="HomeBanner mb-5">
        <div className="bannerBooking">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-9 col-xl-10 col-lg-11">
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

      <div className="container">
        <div>
          <h2>Explore Destinations</h2>
          <p>from New Delhi</p>
        </div>
        <div className="row">
          {TripDetails.map((item, id) => {
            return (
              <div className="col-lg-4 col-md-12 col-sm-12 col-12" key={id}>
                <div data-aos="flip-left"
                 className="tripDetails">
                  <div className="tripDetailsImage">
                    <img src={item.image} />
                  </div>
                  <div>
                    <p className="tripLocation">
                      <strong>{item.Loctaion}</strong>
                    </p>
                    <p className="tripIndia">
                      <span>INDIA</span>
                      <p className="tripPrice">
                        <strong>{item.Price}</strong>
                      </p>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="moreDestinations" >
            <h3>More Destinations in India </h3>
            <Slick/>
          </div>
        </div>
        <div className="extraDiscount" >
          <h3>For Extra Discount</h3>
          <Promotionslick/>
        </div>

        <div className="tripHotels">
          <h2>For Hotels and Home </h2>
          <button className="exploreMoreBtn" onClick={handleClick}>Click Here</button>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default MoreTripDetails;
