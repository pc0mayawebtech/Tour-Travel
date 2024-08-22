import './index.css'
import HomeChoose from '../../../constant/homechoose';
const OfferChoose = () => {
    return (
        <>
            {
                HomeChoose.map((item, id) => {
                    return (
                        <div className="col-lg-3">
                            <div className='boxChooseOuterWrapper' key={id}>
                                <div className='iconOuterSide'>
                                    {<item.logo size={40} style={{ color: "#5392f9" }} />}
                                </div>
                                <div>
                                    <h4 className='innerSubInfo'>{item.title1}</h4>
                                    <p className='innerSubCont'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>

    )
}

export default OfferChoose;