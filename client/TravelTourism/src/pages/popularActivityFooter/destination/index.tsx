import PopularActivity from "../../../constant/popularactivityfooter";
import "./index.css";


const NewDestinations = () => {
  return (
    <div className="container">
      <div className="row newDestinations">
        {PopularActivity.map((item, id) => {
          return (
            <div className="col-lg-2 col-md-12 col-sm-12 col-12 aboutDestination" key={id}>
              <div>
                <img src={item.image} />
              </div>
              <div className="newDestionSlide">
                <p>{item.location}</p>
                <span>{item.tour}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default NewDestinations;
