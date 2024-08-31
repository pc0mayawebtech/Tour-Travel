const Wheretogoprop = (props: {
  image: string;
  place: string;
  price: number;
}) => {
  const { image, place, price } = props;
  return (
    <div className="col-md-3">
      <div className="whereToGoTile">
        <div className="whereToGoImage">
          <img src={image} alt="image" />
        </div>
        <div className="whereToGoText">
          <p className="place">{place}</p>
          <p className="whereToGoPrice">From ₹{price}</p>
        </div>  
      </div>
    </div>
  );
};

export default Wheretogoprop;
