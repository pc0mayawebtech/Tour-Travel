import './index.css';
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from 'react';
import FlightView from '../../../api/FlightView';
import { useLocation } from 'react-router-dom';
import Loader from '../../loader';

const FlightInfo = () => {
    const location = useLocation();
    const formData = location.state || {};
    console.log(formData, 'heydta');
    const [response, setResponse] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [loader, setLoader] = useState(false);

    const flightData = async () => {
        try {
            setLoader(true);
            const response = await FlightView(formData);
            console.log(response?.data, 'APIResponseData');
            setResponse(response?.data || []);
            setLoader(false);
        } catch (error) {
            console.error('Error fetching flight data:', error);
            setLoader(false);
        }
    }

    useEffect(() => {
        flightData();
    }, [formData]);

    const calculateTotalTime = (departure: string | number | Date, arrival: string | number | Date) => {
        const departureTime = new Date(departure);
        const arrivalTime = new Date(arrival);
        const diff = departureTime.getTime() - arrivalTime.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    };
    return (
        <div className="col-lg-9" >
            {
                loader ? (<Loader />) : (
                    response?.searchResult?.tripInfos?.ONWARD?.map((item: any) => {
                        return (
                            <div className='backWrapper mb-4' key={item.id}>
                                <div className="flightOuterWrapper">
                                    <div className='d-flex align-items-center gap-3 w-25'>
                                        <RiFlightTakeoffFill size={40} color='cornflowerblue' />
                                        <span className='flightname mb-0'>{item?.sI?.[0]?.fD?.aI?.name}</span>
                                    </div>
                                    <div className='d-flex align-items-center gap-4'>
                                        <div>
                                            <p className='flightTime'>
                                                {new Date(item?.sI?.[0]?.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                            <p className='flightDest'>{item?.sI?.[0]?.da?.name}</p>
                                        </div>
                                        <div>
                                            <svg role="img" aria-hidden="true" viewBox="0 0 95 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 5c0-.552.498-1 1.113-1H82v2H1.113C.498 6 0 5.552 0 5Zm82-.143V0l12.277 4.668c.046.018.094.032.142.045.927.255.693 1.287-.336 1.287H82V4.857Z" fill="#B1B9CB"></path>
                                            </svg>
                                            <p className='timeDuration'>
                                                {calculateTotalTime(item?.sI?.[0]?.at, item?.sI?.[0]?.dt)}
                                            </p>
                                        </div>
                                        <div>
                                            <p className='flightTime'>
                                                {new Date(item?.sI?.[0]?.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </p>
                                            <p className='flightDest'>{item?.sI?.[0]?.aa?.name}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center gap-2 justify-content-center'>
                                        <div>
                                            <span className='symbol'>Rs.</span>
                                            <span className='totalAmount'>7,351</span>
                                        </div>
                                        <div>
                                            <span onClick={() => { setToggle(!toggle) }}>
                                                {toggle ? <IoIosArrowUp size={26} color='cornflowerblue' /> : <FaAngleDown size={22} color='cornflowerblue' />}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                )
            }
        </div >
    );
}

export default FlightInfo;
