import './index.css';
import { FaUser } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoAirplane } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { LuClock7 } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
const PaymentGateway = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className='row mt-4'>
                    <div className="col-lg-7">
                        <div className='payemntOuterBox mb-3'>
                            <p className='paymentDetail'>Contact Details</p>
                            <div className='detailOuter mb-2'>
                                <label>
                                    <FaUser color='grey' size={15} style={{ marginTop: "-8px" }} />
                                </label>
                                <div>
                                    <p className='userInfo'>PAWAN KUMAR</p>
                                    <p className='useraddInfo'>pawan30jul@gmail.com</p>
                                    <p className='useraddInfo'>+91 8882939347</p>
                                </div>
                            </div>

                            <p className='paymentDetail'>Passengar Details</p>
                            <div className='detailOuter'>
                                <label>
                                    <FaUser color='grey' size={15} style={{ marginTop: "-8px" }} />
                                </label>
                                <div>
                                    <p className='userInfo'>PAWAN KUMAR</p>
                                </div>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <div className='d-flex align-items-center gap-1'>
                                <MdOutlineSecurity size={25} color='blue' /><span className='paymentText mb-0'>Secure Payment</span>
                            </div>
                            <p><small>All card information is fully encrypted, secure and protected.</small></p>
                        </div>
                        <div className='paymentCard'></div>
                    </div>
                    <div className='col-lg-5'>
                        <div className='mb-4'>
                            <div className='flightFullView'>
                                <div className='innerFlightDescription'>
                                    <span className='flightPlace'>New Delhi and NCR</span>
                                    <span><IoIosArrowRoundForward size={30} color='white' /></span>
                                    <span className='flightPlace'>Varanasi</span>
                                </div>
                                <div>
                                    <span className='flightPlaceInfo'>7 Oct · 1 Passenger · Economy</span>
                                </div>
                            </div>

                            <div className='InnerInfoPart'>
                                <div className='InnerDescriptionInfo'>
                                    <span className='flightInfoPlace'>New Delhi and NCR (DEL)</span>
                                    <span><IoAirplane size={20} color='grey' /></span>
                                    <span className='flightInfoPlace'>Varanasi (VNS)</span>
                                </div>
                                <div className='mb-1'>
                                    <GiCommercialAirplane size={15} color='grey' /><span className='flightInfo'>IndiGo</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='flighttiming'>7 Oct · 19:10 - 20:25 · <LuClock7 style={{ marginTop: "-3px" }} /> 1h 15m</span>
                                </div>
                            </div>
                        </div>

                        <div className='PriceBox'>
                            <p className='mb-2'>Price breakdown</p>
                            <div className='InnerFlightPriceContainer'>
                                <div>
                                    <p className='InnerticktInfo mb-2'>Adult</p>
                                    <p className='addInfo mb-2'>Base fare</p>
                                    <p className='addInfo mb-0'>Taxes and fees</p>
                                </div>
                                <div>
                                    <p className='InnerticktInfo mb-2'>Rs. 6,379.35 x 1</p>
                                    <p className='addInfo mb-2 text-end'>Rs. 5,339.60</p>
                                    <p className='addInfo mb-0 text-end'>Rs. 1,039.75</p>
                                </div>
                            </div>
                            <hr />
                            <div className='d-flex align-item justify-content-between'>
                                <p className='InnerticktInfo mb-0'>Discount</p>
                                <p className='totalDiscount mb-0'>- Rs. 210.73</p>
                            </div>
                            <hr />
                            <div className='d-flex align-item justify-content-between'>
                                <p className='InnerticktInfo mb-2'>Total</p>
                                <p className='totalPrice mb-2'>Rs. 6,168.62</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentGateway;