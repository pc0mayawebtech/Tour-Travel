import GuideDetails from "../../constant/tourguide";
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import "./index.css"

const TourGuide=()=>{
    window.scrollTo({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    return(
        <>
        <Header/>
        <div className="tourGuides">
            <h2>Tour Guides</h2>
        </div>
        <div className="container">
            <div className="row guideTeam">
                {GuideDetails.map((item,id)=>{
                return(
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12 guideDetails" key={id}>
                        <div>
                        <div>
                            <img src={item.image}/>
                        </div>
                        <div>
                            <p>{item.name}</p>
                            <span>{item.post}</span>
                        </div>
                    </div>
                    </div>
                )
            })}
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default TourGuide;