import "./index.css";
import ChooseUs from "../../constant/whychooseus";
import Header from "../../shared-components/header";
import Slick from "../Flighthotel/slick";
import Index from "./slick";
import Flightreview from "../Flighthotel/flighthotelreview";
import Footer from "../../shared-components/footer";
import Destinationoutisdeindia from "../Flighthotel/Destinationoutside";

export const Activity = () => {
    
  return (
    <>
      <Header />
      <div className="activityHeader">
        <h1>Find your next Adventure</h1>
        <span>Bringing you the best activities from across the world</span>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="activityhappeningAround">
              <h3>Top activities happening around you</h3>
            </div>
          </div>
          <div className="row">
            <div>
              <Index />
            </div>
          </div>
          <div>
            <div className="choosingUs">
              <h3>Why choose agoda??</h3>
            </div>
            <div className="row  chosingUs">
              {ChooseUs.map((item, id) => {
                return (
                  <div
                    className="col-lg-3 col-md-12 col-sm-12 col-12 whyChooseUs"
                    key={id}
                  >
                    <div>
                      <img src={item.img} />
                    </div>
                    <div className="choosingUsDetails">
                      <h6>{item.detail1}</h6>
                      <span>{item.detail2}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
      <Footer />
    </>
  );
};
