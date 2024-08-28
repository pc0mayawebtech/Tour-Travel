import './index.css'
import HomeJourney from '../../../constant/homejourney';
const Journey = () => {
    return (
        <>
            {
                HomeJourney.map((item, id) => {
                    return (
                        <div className="col-lg-3">
                            <div className='journeybox' key={id}>
                                <div className='iconBackSide'>
                                    {<item.logo size={40} />}
                                </div>
                                <h4 className='totalNumber'>{item.counting}</h4>
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