import './index.css';
export interface DestructurePropsType {
    label: string;
    id: number,
    content: JSX.Element;
};

interface PropsType {
    steps: DestructurePropsType[],
    currentStep: number,
}

const Stepper: React.FC<PropsType> = ({ steps, currentStep }) => {
    return (
        <>
            <div className="stepper">
                {
                    steps.map(({ label }, id) => (
                        <>
                            <div className="stepper-container" key={id}>
                                <div className={`step-number ${id <= currentStep && 'active'}`}>
                                    {id + 1}
                                </div>
                                <div className="step-label">{label}</div>
                            </div>
                            {id < steps.length - 1 && <span className={`lineStepper ${id < currentStep && 'active'}`}></span>}
                        </>
                    ))
                }
            </div>
            <div>{steps[currentStep].content}</div>
        </>
    )
}

export default Stepper;