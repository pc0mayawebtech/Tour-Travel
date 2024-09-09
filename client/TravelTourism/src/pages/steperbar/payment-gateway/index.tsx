import './index.css';
import { FaUser } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
const PaymentGateway = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className='row mt-4'>
                    <div className="col-lg-7">
                        <div className='payemntOuterBox'>
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
                    </div>
                    <div className='col-lg-5'>
                        <div className='flightFullView'>
                            <span className=''>New Delhi and NCR</span>
                            <span className=''><IoIosArrowRoundForward /></span>
                            <span className=''>Varanasi</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PaymentGateway;