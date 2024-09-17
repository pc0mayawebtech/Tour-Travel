import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, CircleUserRound, AlignCenter, X } from 'lucide-react';
import { useRef, useState } from 'react';

const Header = () => {
    const [isView, setIsView] = useState(false);
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const navRef = useRef();
    const showNavbar = () => {
        navRef?.current?.classList?.toggle('responsive_nav');
    }


    const handleLogOut = () => {
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
        }
        navigate("/", { replace: true })
    }

    return (
        <>
            <header className='outerBox'>
                <div className="container-fluid">
                    <div className='InnerOuterWrapper'>
                        <label className='logo'>
                            <span><Link to={'/home'} className='linkLogo'>agoda</Link></span>
                        </label>
                        <nav className='innerMenuList'>
                            <ul ref={navRef}>
                                <li><Link to="/flighthotel" className='linkMenu'>Flight + Hotel</Link></li>
                                <li><Link to="/flighthome" className='linkMenu'>Hotels + Homes</Link></li>
                                <li><Link to='' className='linkMenu' onClick={() => setIsView(!isView)}>Transport {isView === false ? <ChevronDown /> : <ChevronUp />}</Link>
                                    {
                                        isView && <ul>
                                            <li><Link to="/" className='subMenuLink'>Flights</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Buses</Link></li>
                                            <li><Link to="/train" className='subMenuLink'>Trains</Link></li>
                                            <label className='mobilecross'>
                                                <X size={25} onClick={() => setIsView(false)} />
                                            </label>
                                        </ul>
                                    }
                                </li>
                                <li><Link to="/activities" className='linkMenu'>Activities</Link></li>
                                <li><Link to="/couponsAndDeals" className='linkMenu'>Coupons & Deals</Link></li>
                            </ul>
                        </nav>
                        <div className='createAccount'>
                            <span className='user1' onClick={handleLogOut}>Log Out</span>
                            <span><Link to="/signup" className='user2'>Create account</Link></span>
                        </div>
                        <div className='d-lg-none d-flex align-items-center gap-4'>
                            <label className='mobileIcon'>
                                <CircleUserRound size={25} onClick={() => setVisible(!visible)} />
                                {
                                    visible && <div className='mobileCreateAccount'>
                                        <p className='user1' onClick={handleLogOut}>Log Out</p>
                                        <p><Link to="/signup" className='user2'>Create account</Link></p>
                                    </div>
                                }
                            </label>
                            <label className='mobilehamburger'>
                                <AlignCenter size={25} onClick={showNavbar} />
                            </label>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;