import { useNavigate } from "react-router-dom";
import Coupons from "../../constant/coupons&deals";
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import "./index.css"

const CouponsAndDeals = () => {
    const navigate = useNavigate()
    const handleClaim = () => {
        navigate('/flights')
    }
    return (
        <>
            <Header />
            <div className="todaysDeals">
                <h2>Today's Deals</h2>
                <p>Spontaneous savings. Available nowhere else. Bookmark this page and check back daily.</p>
            </div>
            <div className="container">
                <div className="row">


                    {
                        Coupons.map((item, id) => {
                            return (
                                <div className="col-md-3 todaysCoupons" key={id}>
                                    <div className="">
                                        <img src={item.image} />
                                    </div>
                                    <div>
                                        <h6>{item.offer}</h6>
                                        <p>{item.details}</p>
                                    </div>
                                    <button className="couponClaimBtn" onClick={handleClaim}>{item.book}</button>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row applyingCoupons">
                    <h3>How to apply coupons ??</h3>
                    <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1724935082/full-img-2x_jmbbma.png" />

                    <div className="col-md-4">
                        <p className="couponsApplyDetails">Find a coupon and collect it. If there is a promotion code, don't forget to copy it!</p>
                    </div>
                    <div className="col-md-4">
                        <p className="couponsApplyDetails">Search for properties with “Coupon applicable” label to use your coupons</p>
                    </div>
                    <div className="col-md-4">
                        <p className="couponsApplyDetails">Be sure to apply your coupon / promotion code before completing payment</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default CouponsAndDeals
