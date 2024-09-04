import './index.css'
import HomeJourney from '../../../constant/homejourney';
import CountUp from 'react-countup';
const Journey = () => {
    return (
        <>
            {
                HomeJourney.map((item, id) => {
                    return (
                        <div className="col-lg-3">
                            <div className='journeybox' key={id}>
                                <div className='iconBackSide'>
                                    {item.logo && <item.logo size={40} />}
                                </div>
                                <div className='text-center'>
                                    <CountUp className='totalNumber' duration={5} end={item.counting} scrollSpyOnce enableScrollSpy /><span className='totalNumber'>{item.countSymbol}</span>
                                </div>
                                <p className='abtNumberInfo'>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default Journey;