import Footer from '../../shared-components/footer';
import Header from '../../shared-components/header';
import FlightInfo from './flight-info';
import './index.css';

const AirLines = () => {
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
                        <h2 className='flightInfo'>Flights from New Delhi and NCR to Varanasi</h2>
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