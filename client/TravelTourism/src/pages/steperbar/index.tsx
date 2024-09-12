import './index.css';
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import Stepper from "./stepper";

export interface PropsType {
    label: string;
    id: number,
    content: JSX.Element;
};

export const StepperBar: React.FC = () => {
    const steps: PropsType[] = [
        {
            id: 1,
            label: 'Personal Info',
            content: <div>Passenger Details</div>,
        },
        {
            id: 2,
            label: 'Account Info',
            content: <div>Payment Information</div>,
        },
        {
            id: 3,
            label: 'Payment',
            content: <div>Booking is Confirmed!</div>,
        },
    ];
    return (
        <>
            <Header />
            <div className="StepperBarOuter">
                <div className="container-fluid">
                    <div className='outerStepper'>
                        <Stepper steps={steps} />
                        {/* <span className='lineStepper'></span> */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StepperBar;