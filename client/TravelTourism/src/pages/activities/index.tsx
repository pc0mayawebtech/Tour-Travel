import Header from "../../shared-components/header"
import "./index.css"
import ActivitiesArray from "../../constant/topacitivity"
import { FaStar } from "react-icons/fa"


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
                        <div>
                            <h4>Top activities happening around you</h4>
                        </div>
                        <div className="row">
                            {ActivitiesArray.map((item, id) => {
                                return (
                                    <div className="col-lg-3" key={id}>
                                        <div className="locationActivity">
                                            <img src={item.image} />
                                        </div>
                                        <div>
                                            <h4>{item.detail}</h4>
                                            <FaStar />{item.ratings} {item.review}reviews
                                            <span>{item.price}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
