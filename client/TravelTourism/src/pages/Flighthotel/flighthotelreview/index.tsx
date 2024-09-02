import './index.css'
const Flightreview = (props: { hotelname: string; place: string; text: string; name: string }) => {
  const { hotelname, place, text, name } = props
  return (
    <div className="col-md-4">
      <div className='reviewTile'>
        <p className="reviewHotelName">{hotelname}</p>
        <p className="reviewPlace">- {place}</p>
        <p className="reviewText">{text}</p>
        <p className="reviewerName">- {name}</p>
      </div>
    </div>
  )
}

export default Flightreview
