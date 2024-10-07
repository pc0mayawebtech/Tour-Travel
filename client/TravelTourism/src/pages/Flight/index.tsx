import Dashboard from "../../shared-components/Dashboard"
import Footer from "../../shared-components/footer"
import Header from "../../shared-components/header"
import Destinationoutisdeindia from "../Flighthotel/Destinationoutside"
import Featurehome from "../Flighthotel/featurehome"
import Slick from "../Flighthotel/slick"
import './index.css'

const Flight = () => {
  return (
    <div>
            <Header />
            <div className="flightHotelBanner"></div>
            <Dashboard/>
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

export default Flight
