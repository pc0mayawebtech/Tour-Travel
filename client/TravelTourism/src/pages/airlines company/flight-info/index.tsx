import './index.css';
import { RiFlightTakeoffFill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import FlightView from '../../../api/FlightView';
import { useQuery } from '@tanstack/react-query';

const FlightInfo = () => {
    const [toggle, setToggle] = useState(false);
    const { data: flightData, isPending, isError, error } = useQuery({
        queryKey: ['flights'],
        queryFn: FlightView,
    });

    console.log('flightdata', flightData?.data);

    const calculateTotalTime = (departure: string | number | Date, arrival: string | number | Date) => {
        const departureTime = new Date(departure);
        const arrivalTime = new Date(arrival);
        const diff = arrivalTime.getTime() - departureTime.getTime();

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        return `${hours}h ${minutes}m`;
    };

    if (isPending) {
        return <span className='text-center'>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            <div className="col-lg-9">
                {flightData.data.map((item: { id: Key | null | undefined; airline: { name: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; departure: { scheduled: string | number | Date; timezone: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; arrival: { scheduled: string | number | Date; timezone: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) => (
                    <div className='backWrapper mb-4' key={item.id}>
                        <div className="flightOuterWrapper">
                            <div className='d-flex align-items-center gap-3 w-25'>
                                <RiFlightTakeoffFill size={40} color='cornflowerblue' />
                                <span className='flightname mb-0'>{item.airline.name}</span>
                            </div>
                            <div className='d-flex align-items-center gap-4'>
                                <div>
                                    <p className='flightTime'>
                                        {new Date(item?.departure?.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <p className='flightDest'>{item.departure.timezone}</p>
                                </div>
                                <div>
                                    <svg role="img" aria-hidden="true" viewBox="0 0 95 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5c0-.552.498-1 1.113-1H82v2H1.113C.498 6 0 5.552 0 5Zm82-.143V0l12.277 4.668c.046.018.094.032.142.045.927.255.693 1.287-.336 1.287H82V4.857Z" fill="#B1B9CB"></path></svg>
                                    <p className='timeDuration'>
                                        {calculateTotalTime(item.departure.scheduled, item.arrival.scheduled)}
                                    </p>
                                </div>
                                <div>
                                    <p className='flightTime'>
                                        {new Date(item?.arrival?.scheduled).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </p>
                                    <p className='flightDest'>{item.arrival.timezone}</p>
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
                ))}
            </div>
        </>
    )
}

export default FlightInfo;
