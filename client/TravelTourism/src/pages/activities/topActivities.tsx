import { FaStar } from "react-icons/fa"

const TopActivities = ({image,detail,rating,review,price}) => {
    return (
        <div className="col-md-3">
            <div>
                <img src={image} />
            </div>
            <div>
                <h4>{detail}</h4>
                <FaStar/>{rating} {review} reviews
                <span>{price}</span>
            </div>
        </div>
    )
}

export default TopActivities