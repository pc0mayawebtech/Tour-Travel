import './index.css';
import Footer from "../../shared-components/footer";
import Header from "../../shared-components/header";
import Stepper from "./stepper";
import PassengerDetail from './passengar-details';
import PaymentGateway from './payment-gateway';
import { useState } from 'react';

export interface PropsType {
    label: string;
    id: number,
    content: JSX.Element;
};

export const StepperBar: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    }
    const steps: PropsType[] = [
        {
            id: 1,
            label: 'Personal Info',
            content: <div><PassengerDetail handlNext={handleNext} /></div>,
        },
        {
            id: 2,
            label: 'Account Info',
            content: <div><PaymentGateway handleNext={handleNext} /></div>,
        },
        {
            id: 3,
            label: 'Payment Status',
            content: <div>Booking is Confirmed!</div>,
        },
    ];
    return (
        <>
            <Header />
            <div className="StepperBarOuter">
                <div className="container-fluid">
                    <div className='outerStepper'>
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StepperBar;