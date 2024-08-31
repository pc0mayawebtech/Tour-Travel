import './index.css';
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const FlightInfo = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="col-lg-9">
                <div className='backWrapper'>
                    <div className="flightOuterWrapper">
                        <div className='d-flex align-items-center gap-3'>
                            <RiFlightTakeoffFill size={40} color='cornflowerblue' />
                            <span className='flightname mb-0'>IndiGo</span>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                            <div>
                                <p className='flightTime'>04:55</p>
                                <p className='flightDest'>Del</p>
                            </div>
                            <div>
                                <svg role="img" aria-hidden="true" viewBox="0 0 95 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5c0-.552.498-1 1.113-1H82v2H1.113C.498 6 0 5.552 0 5Zm82-.143V0l12.277 4.668c.046.018.094.032.142.045.927.255.693 1.287-.336 1.287H82V4.857Z" fill="#B1B9CB"></path></svg>
                                <p className='timeDuration'>1h 30m</p>
                            </div>
                            <div>
                                <p className='flightTime'>06:55</p>
                                <p className='flightDest'>VNS</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-2 justify-content-center'>
                            <div>
                                <span className='symbol'>Rs.</span>
                                <span className='totalAmount'> 7,351</span>
                            </div>
                            <div>
                                <span onClick={() => { setToggle(!toggle) }}>
                                    {
                                        toggle ? <IoIosArrowUp size={26} color='cornflowerblue' /> : <FaAngleDown size={22} color='cornflowerblue' />
                                    }

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlightInfo;