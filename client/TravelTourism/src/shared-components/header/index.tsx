import './index.css'
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isView, setIsView] = useState(false);
   
    const navigate= useNavigate();
    
    const handleLogOut=()=>{
       localStorage.removeItem("token")
        navigate("/",  { replace: true })
    }
    
    return (
        <>
            <header className='outerBox'>
                <div className="container-fluid">
                    <div className='InnerOuterWrapper'>
                        <label className='logo'>
                            <span><Link to={'/home'}>agoda</Link></span>
                        </label>
                        <nav className='innerMenuList'>
                            <ul>
                                <li><Link to="/flighthotel" className='linkMenu'>Flight + Hotel</Link></li>
                                <li><Link to="/flighthome" className='linkMenu'>Hotels + Homes</Link></li>
                                <li><Link to='' className='linkMenu' onClick={() => setIsView(!isView)}>Transport {isView === false ? <ChevronDown /> : <ChevronUp />}</Link>
                                    {
                                        isView && <ul>
                                            <li><Link to="/" className='subMenuLink'>Flights</Link></li>
                                            <li><Link to="/" className='subMenuLink'>Buses</Link></li>
                                            <li><Link to="/train" className='subMenuLink'>Trains</Link></li>
                                        </ul>
                                    }
                                </li>
                                <li><Link to="/activities" className='linkMenu'>Activities</Link></li>
                                <li><Link to="/couponsAndDeals" className='linkMenu'>Coupons & Deals</Link></li>
                            </ul>
                        </nav>
                        <div className='createAccount'>
                            <span><Link to="/" className='user1'>Log In</Link></span>
                            <span className='user1' onClick={handleLogOut}>Log Out</span>

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