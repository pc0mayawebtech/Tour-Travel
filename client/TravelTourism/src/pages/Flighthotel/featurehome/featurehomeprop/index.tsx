import { FaLocationPin } from "react-icons/fa6"

const Featurehometile = (props: { image: string; place: string; price: string; location: string; time: string }) => {
    const {image,place,price,location,time}=props

  return (
    <div className="featureHomeTileContent col-md-3">
                <div className="featureHomeTileImage">
                  <img
                    src={image}
                    alt="image"
                  />
                </div>
                <div className="featureTileContent">
                  <p className="hotelName">{place}</p>
                  <p className="location">
                    <FaLocationPin className="icon" />
                    {location}
                  </p>
                  <p className="time">{time}</p>
                  <p className="price">INR {price}</p>
                </div>
              </div>
  )
}

export default Featurehometile
