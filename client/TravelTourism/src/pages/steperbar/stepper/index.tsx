import './index.css';
export interface DestructurePropsType {
    label: string;
    id: number,
    content: JSX.Element;
};

interface PropsType {
    steps: DestructurePropsType[]
}

const Stepper: React.FC<PropsType> = ({ steps }) => {
    return (
        <div className="stepper">
            {
                steps.map(({ label }, id) => (
                    <>
                        <div className="stepper-container" key={id}>
                            <div className="step-number">
                                {id + 1}
                            </div>
                            <div className="step-label">{label}</div>
                        </div>
                        {/* <hr style={{ height: "2.5rem", width: "100%", borderWidth: "0.2rem" }} /> */}
                    </>
                ))
            }
        </div>
    )
}

export default Stepper;