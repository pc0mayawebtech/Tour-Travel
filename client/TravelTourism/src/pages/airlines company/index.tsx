import Footer from '../../shared-components/footer';
import Header from '../../shared-components/header';
import FlightInfo from './flight-info';
import { useLocation } from 'react-router-dom';
import './index.css';

const AirLines = () => {
    const location = useLocation();
    const formData = location.state || {};
    console.log(formData, 'flightResponse');
    return (
        <>
            <Header />
            <section className='mainWrapper mb-5'>
                <div className="container">
                    <div className='middleText'>
                        <h1 className='contactMainHead'>Flight Status</h1>
                    </div>
                </div>
            </section>

            <section className='FlightInfo mb-5'>
                <div className="container">
                    <div className='mb-5'>
                        <h2 className='flightInfo'>{`Flights from ${formData.flyingform} --------> ${formData.flyingto}`}</h2>
                        <p className='flightCont'>Average price per person. The price includes taxes and fees.</p>
                    </div>
                    <div className="row m-auto justify-content-center align-items-center">
                        <FlightInfo />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default AirLines;