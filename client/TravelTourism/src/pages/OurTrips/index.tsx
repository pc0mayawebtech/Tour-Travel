import { Link, useNavigate } from "react-router-dom";
import Header from "../../shared-components/header";
import "./index.css";
import Footer from "../../shared-components/footer";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const OurTrips = () => {
  const navigate = useNavigate();

  window.scrollTo({
    top: 0,
    left: 100,
    behavior: "smooth",
  });
  useEffect(() => {
    Aos.init({
        once: true,
    });    
  }, []);
  const handleExplore = () => {
    navigate("/tripDetails");
  };

  return (
    <>
      <Header />
      <div className="ourTrips">
        <h1>Our Trips</h1>
        <h5 className="ourTripsLink">
          <Link className="tripsLink" to="/home">
            Home
          </Link>
          {">"}
          <Link className="tripsLink" to={"/trips"}>
            Trips
          </Link>
        </h5>
      </div>
      <div className="container tripPlans">
        <h2>
          Trips keeps all your plans in one place for a stress-free
          <p> adventure.</p>
        </h2>
        <div className="row planTrips">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-lg-6 col-md-12 col-sm-12 col-12 aboutTrip"
          >
            <p>
              <strong>Plan your trip</strong>
            </p>
            <span>
              Trips lets you plan, build and manage your perfect itinerary for
              adventures of any length, in any location.
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-lg-6 col-md-12 col-sm-12 col-12 tripDetailsImages"
          >
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725259432/Screenshot_2024-09-02_121330_okxzr3.png"
              alt="plan trip"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-lg-6 col-md-12 col-sm-12 col-12 tripsImage"
          >
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725259059/trips-ui-simple_taftty.png"
              alt="stay informed"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-lg-6 col-md-12 col-sm-12 col-12 aboutTrip"
          >
            <p>
              <strong>Stay informed about unexpected changes</strong>
            </p>
            <span>
              Trips keeps all your bookings in one place with real-time updates
              on any cancellations, delays or gate changes that may arise.
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="linear"
            className="col-lg-6 col-md-12 col-sm-12 col-12 aboutTrip"
          >
            <p>
              <strong>Collaborate together</strong>
            </p>
            <span>
              Keep everyone on your trip on the same page with shared
              itineraries and editing permissions.
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="col-lg-6 col-md-12 col-sm-12 col-12 tripDetailsImages"
          >
            <img
              src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1725260199/Screenshot_2024-09-02_122614_skylzi.png"
              alt="collaborate"
            />
          </div>
        </div>
        <div>
          <h2>Get ready for your next adventure</h2>
          <button className="exploreMoreBtn" onClick={handleExplore}>
            Explore More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default OurTrips;
