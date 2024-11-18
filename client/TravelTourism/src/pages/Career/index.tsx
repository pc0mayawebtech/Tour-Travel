import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  MapPin,
  Search,
} from "lucide-react";
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import "./index.css";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useState } from "react";
import CountUp from 'react-countup';
import { Careertile } from "../../constant/career";
import { BenefitandPerks, BenefitandPerks2 } from "../../constant/careerbenefitandperks";
import { Featuredjob } from "../../constant/careerfeaturedjob";
import { Latestblog } from "../../constant/latestblog";
import { FaArrowRight } from "react-icons/fa";

const Career = () => {
  const [isView, setIsView] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Header />

      <div className="careerBanner"> </div>

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
                              onChange={(date) => setStartDate(date?? new Date())}
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
      <section className="bridgingTheWorld container">
        <div className="row">
          <div className="col-md-6">
            <div className="bridgingTheWorldVideo">
            <iframe
              width="550"
              height="300"
              src="https://www.youtube.com/embed/bhREpdZ1-no"
              title="Working at Agoda | Your Best Journey"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bridgingTheWorldContent">
              <h1>Bridging the world</h1>
              <h1 className="flipWord">
                <div className="verticalFlip">
                  <span>with Agoda</span>
                  <span>through travel</span>
                </div>
              </h1>
              <p>We believe travel allows people to enjoy, learn, and experience more of the amazing world we live in. It brings individuals and cultures together, fostering empathy, understanding and happiness. We are a skillful, driven and diverse team from across the globe, united by a passion to make an impact. Harnessing our innovative technologies and strong partnerships, we aim to make travel easy and rewarding for everyone. If shaping this journey excites you, join us.</p>
              <button className="bridgingTheWorldButton">View open jobs</button>
            </div>
          </div>
        </div>
      </section>
      <section className="careerCount container">
       <ul className="careerUl">
          <li><CountUp end={4} start={0}/>M+ <p>Hotel and Homes</p></li>
          <li><CountUp end={6900} start={0} />+ <p>Agodans</p></li>
          <li><CountUp start={0} end={90}/> + <p>nationalities</p></li>
          <li><CountUp start={0} end={50}/>+ <p>offices Worldwide</p></li>
          <li><CountUp start={0} end={220}/>TBs+ <p>of data, written daily</p> </li>
       </ul>
      </section>
      <section className="careerBannerWrapper">
        <div className="container">
           <div className="careerBannerSection">
            {
                Careertile.map((item,id)=>{
                    return  <div className="careerBannerTile" key={id}>
                    <div className="careerBannerTileImage">
                  <img src={item.image} alt="image" />
                  </div>
                  <div className="careerBannerTileContent">
                  <h5>{item.heading}</h5>
                  <p>{item.text}</p>
                  </div>
                </div>
                })
            }
        </div>
        </div>
      </section>
      <section className="container">
          <div className="benefitAndPerks">
          <h1>Benefits and Perks </h1>
          <p>Our people power Agoda, so we go above and beyond to provide exceptional benefits and perks. This ensures that Agodans receive all the support they need during and after office hours.</p>
          <div className="benefitAndPerksContent">
             {
                BenefitandPerks.map((item)=>{
                    return <div className="benefitAndPerksContentTile" key={item.id}>
                        <div className="benefitAndPerksImage"><img src={item.image} alt="" />
                        </div>
                        <p>{item.text}</p>
                    </div>
                })
             }
          </div>
          <div className="benefitAndPerksContent">
             {
                BenefitandPerks2.map((item)=>{
                    return <div className="benefitAndPerksContentTile" key={item.id}>
                        <div className="benefitAndPerksImage"><img src={item.image} alt="" />
                        </div>
                        <p>{item.text}</p>
                    </div>
                })
             }
          </div>
          </div>
      </section>
      <section className="container">
        <div className="featuredJobs">
            <div className="featuredJobsHeading">
          <h1>Featured Jobs</h1>
          <button>View All Jobs</button>
          </div>
          <ul className="featuredJobSubHeading">
            <li>Job</li>
            <li>Team</li>
            <li>Location</li>
          </ul>
          <ul className="featureJobList">
            <li>
                {
                    Featuredjob.map((item,id)=>{
                        return (<div className="featureJobListContent">
                            <p key={id}>{item.job}</p>
                        <p>{item.team}</p>
                        <p>{item.location}</p>
                        </div>

                        )
                    })
                }
            </li>
          </ul>
        </div>
      </section>
      <section className="container">
        <div className="latestBlog">
            <div className="latestBlogHeading">
                <h1>Latest Blog</h1>
            </div>
            <div className="latestBlogTile">

            {
                Latestblog.map((item,id)=>{
                    return (  <div  className="blog" key={id}>
                         <div className="blogImage">
                            <img src={item.image} alt="image" />
                         </div>
                         <div className="blogContent">
                            <ul><li>{item.subheading}</li>
                            <li>{item.date}</li></ul>
                            <h5>{item.heading}</h5>
                            <p>{item.text}</p>
                            <p className="blogReadMore">Read More <FaArrowRight className="readIcon"/> </p>
                         </div>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Career;
