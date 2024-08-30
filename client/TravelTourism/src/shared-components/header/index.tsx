import './index.css'
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isView, setIsView] = useState(false);
    return (
        <>
            <header className='outerBox'>
                <div className="container-fluid">
                    <div className='InnerOuterWrapper'>
                        <label className='logo'>
                            <span>agoda</span>
                        </label>
                        <nav className='innerMenuList'>
                            <ul>
                                <li><Link to="/flighthotel" className='linkMenu'>Flight + Hotel</Link></li>
                                <li><Link to="/flighthome" className='linkMenu'>Hotels + Homes</Link></li>
                                <li><Link to='' className='linkMenu' onClick={() => setIsView(!isView)}>Transport {isView === false ? <ChevronUp /> : <ChevronDown />}</Link>
                                    {
                                        isView && <ul>
                                            <li><Link to="/" className='subMenuLink'>Flights</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Buses</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Trains</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Ferries</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Airport transfer</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Car rentals</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li><Link to="/" className='linkMenu'>Activities</Link></li>
                                <li><Link to="/" className='linkMenu'>Coupans & Deals</Link></li>
                                <li><Link to="/" className='linkMenu'>eSim</Link></li>
                                <li><Link to="/" className='linkMenu'>Travel Guides </Link></li>
                            </ul>
                        </nav>
                        <div className='createAccount'>
                            <span><Link to="/" className='user1'>Log In</Link></span>
                            <span><Link to="/signup" className='user2'>Create account</Link></span>
                        </div>
                    </div>
                    {/* <label>
                        <CircleUserRound size={25} />
                    </label> */}
                </div>
            </header>
        </>
    )
}

export default Header;