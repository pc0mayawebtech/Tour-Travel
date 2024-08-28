import './index.css';
import { HomeActivity, ImageData } from '../../../constant/homeactivity';
import campainlogo1 from '../../../../public/Images/campinglogo1.png';
import campainlogo2 from '../../../../public/Images/campinglogo2.png';
import campainlogo3 from '../../../../public/Images/campinglogo3.png';
import { useState } from 'react';

const Activities = () => {
    const [isShow, setIsShow] = useState(0);
    const handleClick = (id: number) => {
        setIsShow(id);
    }
    return (
        <>
            <div className="col-lg-4">
                <div className='leftBackWrapper'>
                    {
                        HomeActivity.map((item, id) => {
                            return (
                                <div className={`subInnerBackWrapper ${isShow === id && 'active'}`} key={id} onClick={() => handleClick(id)}>
                                    {< item.logo size={40} />}
                                    <span className='abtText'>{item.title1}</span>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="col-lg-8">
                {
                    ImageData.map((item, id) => {
                        return (
                            isShow === id &&
                            <div className='rightBackWrapper' key={id}>
                                <img src={item.logo} alt={item.logo} className='resultLogo' />
                                <div className='infoabtImage'>
                                    <h4 className='underBoxData'>{item.title1}</h4>
                                    <p className='underBoxCont'>{item.description}</p>
                                    <div className='innerSpeaker'>
                                        <img src={campainlogo1} alt="campainlogo1" className='speakerLogo' />
                                        <img src={campainlogo2} alt="campainlogo2" className='speakerLogo' />
                                        <img src={campainlogo3} alt="campainlogo3" className='speakerLogo' />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default Activities;