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
                            <h3 className='companyLogo'>agoda</h3>
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
                            <h3 className='mainHead'>Company</h3>
                            <ul>
                                <li><Link to="/about" className='footInfoLink'>About Us</Link></li>
                                <li><Link to="/" className='footInfoLink'>Careers</Link></li>
                                <li><Link to="/" className='footInfoLink'>Travel Guides</Link></li>
                                <li><Link to="/" className='footInfoLink'>Traveler Reviews</Link></li>
                                <li><Link to="/contact" className='footInfoLink'>Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h3 className='mainHead'>Destinations</h3>
                            <ul>
                                <li><Link to='/' className='footInfoLink'>Our Trips</Link></li>
                                <li><Link to='/' className='footInfoLink'>Popular Activity</Link></li>
                                <li><Link to='/' className='footInfoLink'>All Flight Routes</Link></li>
                                <li><Link to='/' className='footInfoLink'>Countries/Territories</Link></li>


                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                        <div>
                            <h3 className='mainHead'>More Details</h3>
                            <ul>
                                <li><Link to='/' className='footInfoLink'>Home</Link></li>
                                <li><Link to='/' className='footInfoLink'>Feedback</Link></li>
                                <li><Link to='/' className='footInfoLink'>Why Choose Us</Link></li>
                                <li><Link to='/' className='footInfoLink'>Refund Policy</Link></li>
                                <li><Link to='/' className='footInfoLink'>Privacy & Policy</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer