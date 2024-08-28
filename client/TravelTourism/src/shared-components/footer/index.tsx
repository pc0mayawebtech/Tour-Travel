import './index.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='footerWrapper'>
            <div className="container">
                <div className='row'>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h4 className='companyLogo'>agoda</h4>
                            <p className='compnayInfo'>Welcome to Tourigo, your gateway to unforgettable adventures and immersive travel experiences. Explore with us and let your journey begin!</p>
                        </div>
                        <div className='social-Media'>
                            <FaFacebook className='iconsHandle' />
                            <FaTwitter className='iconsHandle' />
                            <FaLinkedin className='iconsHandle' />
                            <FaYoutube className='iconsHandle' />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h4 className='mainHead'>Company</h4>
                            <ul>
                                <li><Link to="/" className='footInfoLink'>About Us</Link></li>
                                <li><Link to="/" className='footInfoLink'>Careers</Link></li>
                                <li><Link to="/" className='footInfoLink'>Travel Guides</Link></li>
                                <li><Link to="/" className='footInfoLink'>Traveler Reviews</Link></li>
                                <li><Link to="/contact" className='footInfoLink'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h4 className='mainHead'>Destinations</h4>
                            <ul>
                                <li><Link to='/' className='footInfoLink'>Countries/Territories</Link></li>
                                <li><Link to='/' className='footInfoLink'>All Flight Routes</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h4 className='mainHead'>Partner with us</h4>
                            <ul>
                                <li><Link to='/' className='footInfoLink'>YCS partner portal</Link></li>
                                <li><Link to='/' className='footInfoLink'>Partner Hub</Link></li>
                                <li><Link to='/' className='footInfoLink'>Advertise on Agoda</Link></li>
                                <li><Link to='/' className='footInfoLink'>Affiliates</Link></li>
                                <li><Link to='/' className='footInfoLink'>Agoda API  Documentation</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer