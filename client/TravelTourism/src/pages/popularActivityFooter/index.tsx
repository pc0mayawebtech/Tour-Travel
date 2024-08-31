import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import Index from "../activities/slick";
import Destinationoutisdeindia from "../Flighthotel/Destinationoutside";
import Slick from "../Flighthotel/slick";
import Activities from "../home/popular-activity";
import NewDestinations from "./destination";
import "./index.css";

const PopularActivity = () => {
  return (
    <>
      <Header />
      <div className="PopularActivity">
        <h1>
          Popular Activities
          <p>Happening...</p>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div>
            <NewDestinations />
          </div>
          <div className="topActivites">
            <h4>Top Activities Happening Around</h4>
          </div>
          <div className="popularActivityHappeningSlider">
            <Index />
          </div>
        </div>
      </div>
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
      <div className="container">
        <div className="row popularDestinationActivity">
        <div className="discoverMore">
            <h3>Discover more places around</h3>
            <div className="discoverMorePlacesSlide">
              <Slick />
            </div>
            
          </div>
     
        <div className="outsideIndia">
            <div>
              <h3>Discover More Places Outside India</h3>
            </div>
            <div>
              <Destinationoutisdeindia />
            </div>
          </div>
          </div>
      </div>
      <Footer/>
    </>
  );
};
export default PopularActivity;
