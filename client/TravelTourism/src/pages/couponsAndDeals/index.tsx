import "./index.css";
import { useNavigate } from "react-router-dom";
import Coupons from "../../constant/coupons&deals";
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import Promotionslick from "../Flighthotel/PromotionSlick";
import Flightpromotion from "../Flighthotel/flightPromotion";
import { useState } from "react";

const CouponsAndDeals = () => {
  const [offers, setOffers] = useState(Coupons.slice(0, 4));
  const [showMoreBtn, setShowMoreBtn] = useState(true);

  const navigate = useNavigate();
  const handleClaim = () => {
    navigate("/flighthome");
  };
  const handleShowMore = () => {
    setOffers(Coupons);
    setShowMoreBtn(!showMoreBtn);
  };
  const handleShowLess = () => {
    setOffers(Coupons.slice(0, 5));
    setShowMoreBtn(!showMoreBtn);
  };
  return (
    <>
      <Header />
      <div className="todaysDeals">
        <h2>Today's Deals</h2>
        <p>
          Spontaneous savings. Available nowhere else. Bookmark this page and
          check back daily.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="accommodationCoupon mb-3">
            <h3>Accommodation Coupons and Deals</h3>
          </div>
          <div className="accommodationCouponSlider mb-4">
            <Promotionslick />
          </div>

          <div className="flightCoupons mb-3">
            <h3> Flight Coupons and Deals</h3>
          </div>
          <div className="flightCouponSlider mb-4">
            <Flightpromotion />
          </div>
        </div>
        <div className="amazingDeals mb-3">
          <h3>More Amazing Deals</h3>
        </div>
      </div>
      <div className="container">
        <div className="amazingCoupons">
          <div className="row">
            {offers.map((item, id) => {
              return (
                <div className="col-lg-3 col-md-12 col-sm-12 col-12" key={id}>
                  <div className="todaysCoupons">
                    <div>
                      <img src={item.image} />
                    </div>
                    <div>
                      <h6>{item.offer}</h6>
                      <p>{item.details}</p>
                    </div>
                    <button className="couponClaimBtn" onClick={handleClaim}>
                      {item.book}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="showMore">
          {showMoreBtn ? (
            <button className="showMoreBtn" onClick={handleShowMore}>
              {" "}
              Show More{" "}
            </button>
          ) : (
            <button className="showMoreBtn" onClick={handleShowLess}>
              Show Less
            </button>
          )}
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row applyingCoupons">
          <h3>How to apply coupons ??</h3>
          <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1724935082/full-img-2x_jmbbma.png" />

          <div className="col-md-4">
            <p className="couponsApplyDetails">
              Find a coupon and collect it. If there is a promotion code, don't
              forget to copy it!
            </p>
          </div>
          <div className="col-md-4">
            <p className="couponsApplyDetails">
              Search for properties with “Coupon applicable” label to use your
              coupons
            </p>
          </div>
          <div className="col-md-4">
            <p className="couponsApplyDetails">
              Be sure to apply your coupon / promotion code before completing
              payment
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CouponsAndDeals;
