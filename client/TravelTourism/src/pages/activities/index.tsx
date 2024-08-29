import Footer from "../../shared-components/footer"
import ChooseActivity from "../../constant/chooseactivity";
import Header from "../../shared-components/header";
import "./index.css";
import Index from "./slick";

export const Activity = () => {
  return (
    <>
      <Header />
      <div className="activityHeader">
        <h1>Find your next Adventure</h1>
        <span>Bringing you the best activities from across the world</span>
      </div>
      <div className="container">
        <div className="topActivities">
          <h4>Top activities happening around you</h4>
        </div>
        <div className="row">
          <Index />
        </div>
        <div className="">
          <h4>Discover Places Around You</h4>
        </div>
        <div>

        </div>
        <div className="chosingUs">
          <div>
            <h4>Why choose us??</h4>
          </div>
          
          <div className="row">
            {
                ChooseActivity.map((item,id) =>{
                    return(
                        <div className="col-lg-4 whyChooseUs" key={id}>
                            <div>
                                <img src={item.image}/>
                            </div>
                            <div>
                                <h6>{item.detail1}</h6>
                                <p className="chosingUsDetials">{item.detail2}</p>
                            </div>

                        </div>
                    )})
            }
           
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};
