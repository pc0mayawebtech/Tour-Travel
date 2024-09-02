import { SetStateAction, useState } from "react";
import Featurehometile from "./featurehomeprop";
import "./index.css"

const Featurehome = () => {
    const [place, setPlace] = useState(1);

    const handlePlace = (id: SetStateAction<number>) => {
      setPlace(id);
    };
  return (
    <>
 <div className="featureHomeSubHeading">
          <ul>
            <li onClick={() => handlePlace(1)} className={place===1? "active" : "non-active"}>NewDelhi and NCR</li>
            <li onClick={() => handlePlace(2)} className={place===2? "active" : "non-active"}>Mumbai</li>
            <li onClick={() => handlePlace(3)} className={place===3? "active" : "non-active"}>Banglore</li>
            <li onClick={() => handlePlace(4)} className={place===4? "active" : "non-active"}>Goa</li>
            <li onClick={() => handlePlace(5)} className={place===5? "active" : "non-active"}>Hyderabad</li>
          </ul>
        </div>
        {place === 1 && (
          <div className="featureHomeTile">
            <div className="row">
             
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
            </div>
            <div className="row">
            <Featurehometile
                image="\Images\featurehome\delhincr\delhi5.webp"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi6.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi7.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi8.jpg"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
            </div>
          </div>
        )}
        {place === 2 && (
          <div className="featureHomeTile">
            <div className="row">
             
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
                <Featurehometile
                    image="\Images\featurehome\delhincr\delhi2.jpg"
                    price="1,780"
                    time="Per night before taxes and fees"
                    location="Gurgaon,
                    New Delhi and NCR"
                    place="Very spacious terrace with rooms for gatherings"
                  />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
            </div>
            <div className="row">
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
            </div>
          </div>
        )}
        {place === 3 && (
          <div className="featureHomeTile">
            <div className="row">
             
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
            </div>
            <div className="row">
            <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
            </div>
          </div>
        )}
        {place === 4 && (
          <div className="featureHomeTile">
            <div className="row">
             
               <Featurehometile
                 image="\Images\featurehome\delhincr\delhi3.webp"
                 price="1,790"
                 time="Per night before taxes and fees"
                 location="South Delhi,New Delhi and NCR"
                 place="Woodpecker Apartment Hauz Khas 3 Room BnB"
               />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi3.webp"
                price="1,790"
                time="Per night before taxes and fees"
                location="South Delhi,New Delhi and NCR"
                place="Woodpecker Apartment Hauz Khas 3 Room BnB"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
            </div>
            <div className="row">
            <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi4.webp"
                price="2,780"
                time="Per night before taxes and fees"
                location="Gurgaon,New Delhi and NCR"
                place="Super OYO Capital O Uk House Residency"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi2.jpg"
                price="1,780"
                time="Per night before taxes and fees"
                location="Gurgaon,
                New Delhi and NCR"
                place="Very spacious terrace with rooms for gatherings"
              />
              <Featurehometile
                image="\Images\featurehome\delhincr\delhi1.webp"
                price="1,650"
                time="Per night before taxes and fees"
                location="North Delhi, New Delhi and NCR"
                place="Super Townhouse Chugh House"
              />
            </div>
          </div>
        )}
        <div className="featureHomeButton">
            <button>See more properties</button>
        </div>
    </>
  )
}

export default Featurehome
