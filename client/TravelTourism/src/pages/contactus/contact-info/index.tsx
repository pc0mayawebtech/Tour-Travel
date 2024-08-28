import './index.css';
import { Link } from 'react-router-dom';
import ContactStatus from '../../../constant/contactus';
const ContactInfo = () => {
    return (
        <>
            {
                ContactStatus.map((item, id) => {
                    return (
                        <div className='col-lg-4 mb-4'>
                            <div className='outerWrapper' key={id}>
                                <div className='iconWrapper'>
                                    {<item.logo size={30} />}
                                </div>
                                <div>
                                    <h4 className='innerText'>{item.title1}</h4>
                                    {
                                        item.link1 && item.link2 ? <>
                                            <p className='mb-2'><Link to={item.link1} className='subInnerInfoText'>{item.title2}</Link></p>
                                            <p className='mb-0'><Link to={item.link2} className='subInnerInfoText'>{item.title3}</Link></p>
                                        </>
                                            :
                                            <>
                                                <p className='subInnerInfoText mb-2'>{item.title2}</p>
                                                <p className='subInnerInfoText mb-0'>{item.title3}</p>
                                            </>
                                    }
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContactInfo;