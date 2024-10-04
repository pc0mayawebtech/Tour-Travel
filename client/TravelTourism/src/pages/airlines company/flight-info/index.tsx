import './index.css';
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from 'react';
import verticalImage from '../../../../public/Images/verticalline.png';
import FlightView from '../../../api/FlightView';
import { useLocation, NavLink } from 'react-router-dom';
import Loader from '../../loader';

const FlightInfo = () => {
    const location = useLocation();
    const formData = location.state || {};
    console.log(formData, 'heydta');
    const [response, setResponse] = useState([]);
    const [loader, setLoader] = useState(false);
    const [expandedId, setExpandedId] = useState<number | null>(0);

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

    const dateString = formData.traveldate;
    const dateParts = dateString.split('-');
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[month];
    const formattedDate = `${day} ${monthName}`;

    const handleToggle = (id: number) => {
        console.log(id)
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <div className="col-lg-9">
            {loader ? (<Loader />) : (
                response?.searchResult?.tripInfos?.ONWARD?.map((item: any) => {
                    return (
                        <div className='backWrapper mb-4' key={item?.sI?.[0]?.id}>
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
                                        <span onClick={() => handleToggle(item?.sI?.[0]?.id)}>
                                            {expandedId === item?.sI?.[0]?.id ? <FaAngleDown size={22} color='cornflowerblue' /> : <IoIosArrowUp size={26} color='cornflowerblue' />}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {expandedId === item?.sI?.[0]?.id && (
                                <div>
                                    <div className="row p-lg-4 p-sm-0 mb-0">
                                        <div className="col-lg-7">
                                            <div className='d-flex align-items-center justify-content-start'>
                                                <div className='flightViewDetail'>
                                                    <div>
                                                        <p className='mb-0'>{new Date(item?.sI?.[0]?.dt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                                        <p className='flightdate mb-0'>{formattedDate}</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-0'>{calculateTotalTime(item?.sI?.[0]?.at, item?.sI?.[0]?.dt)}</p>
                                                    </div>
                                                    <div>
                                                        <p className='mb-0'>{new Date(item?.sI?.[0]?.at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                                        <p className='flightdate'>{formattedDate}</p>
                                                    </div>
                                                </div>
                                                <div className='spaceLine'>
                                                    <img src={verticalImage} alt="verticalImage" style={{ width: "45px", height: "145px" }} />
                                                </div>
                                                <div className='detailsData'>
                                                    <div>
                                                        <p className='mb-0'>{formData.flyingform}</p>
                                                        <p className='airportname mb-0'>{item?.sI?.[0]?.da?.name}</p>
                                                    </div>
                                                    <div className='d-flex align-items-center justify-content-start gap-2'>
                                                        <RiFlightTakeoffFill size={35} color='cornflowerblue' />
                                                        <span className='flightName mb-0'>{item?.sI?.[0]?.fD?.aI?.name}</span>
                                                    </div>
                                                    <div>
                                                        <p className='mb-0'>{formData.flyingto}</p>
                                                        <span className='airportname'>{item?.sI?.[0]?.aa?.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-5">
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-end'>
                                        <NavLink to="/stepperbar" className="selectbtn"><button type='submit' className='innerSubtn'>Select</button></NavLink>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default FlightInfo;
