import { useState } from 'react';
import './index.css';
const PassengerDetail = ({ handlNext }) => {
    const [inputVal, setInputVal] = useState({
        firstname: '',
        lastname: '',
        mnumber: '',
        email: '',
        error: {
            firstname: '',
            lastname: '',
            mnumber: '',
            email: '',
        }
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setInputVal(prevState => ({ ...prevState, [name]: value }));
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const { firstname, lastname, mnumber, email } = inputVal
        const errors = {
            firstname: '',
            lastname: '',
            mnumber: '',
            email: '',
        }

        let hasError = false;

        if (!firstname) {
            errors.firstname = "First Name is required";
            hasError = true;
        }
        else if (firstname.length < 2) {
            errors.firstname = "First Name must be at least 2 characters long";
            hasError = true;
        }
        if (!lastname) {
            errors.lastname = "Last Name is required";
            hasError = true;
        }
        else if (lastname.length < 2) {
            errors.lastname = "Last Name must be at least 2 characters long";
            hasError = true;
        }
        if (!mnumber) {
            errors.mnumber = "Mobile Number is required";
            hasError = true;
        }
        else if (mnumber.length < 10) {
            errors.mnumber = "Mobile Number must be at least 10 characters long";
            hasError = true;
        }
        if (!email) {
            errors.email = "Email is required";
        }
        else if (!email.includes('@')) {
            errors.email = "Invalid Email";
            hasError = true;
        }

        if (!hasError) {
            console.log('data is submit successfully');
            setInputVal({
                firstname: '',
                lastname: '',
                mnumber: '',
                email: '',
                error: {
                    firstname: '',
                    lastname: '',
                    mnumber: '',
                    email: '',
                }
            });
            handlNext();
        }
        else {
            setInputVal(prevState => ({ ...prevState, error: errors }));
        }
    }
    return (
        <>
            <section>
                <div className='mt-4 mb-4'>
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-8">
                                <div className='formOuterBox'>
                                    <form method='post' onSubmit={handleSubmit}>
                                        <div>
                                            <p className='conDetail'>Contact Details</p>
                                            <p className='ticketSent'>This is where your E-ticket will be sent</p>
                                        </div>
                                        <div className='formOuterWrapper'>
                                            <label htmlFor="firstname" className='labelControl'>First Name</label>
                                            <input type="text" name="firstname" id="firstname" value={inputVal.firstname} className='formControl' onChange={handleChange} />
                                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "-10px", marginBottom: "0.5rem" }}>{inputVal.error.firstname}</p>
                                        </div>
                                        <div className='formOuterWrapper'>
                                            <label htmlFor="lastname" className='labelControl'>Last Name</label>
                                            <input type="text" name="lastname" id="lastname" value={inputVal.lastname} className='formControl' onChange={handleChange} />
                                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "-10px", marginBottom: "0.5rem" }}>{inputVal.error.lastname}</p>
                                        </div>
                                        <div className='formOuterWrapper'>
                                            <label htmlFor="mnumber" className='labelControl'>Mobile Number</label>
                                            <input type="tel" name="mnumber" maxLength={10} id="mnumber" value={inputVal.mnumber} className='formControl' onChange={handleChange} />
                                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "-10px", marginBottom: "0.5rem" }}>{inputVal.error.mnumber}</p>
                                        </div>
                                        <div className='formOuterWrapper'>
                                            <label htmlFor="email" className='labelControl'>Email</label>
                                            <input type="email" name="email" id="email" value={inputVal.email} className='formControl' onChange={handleChange} />
                                            <p style={{ color: "red", fontSize: "0.8rem", textAlign: "start", marginTop: "-10px", marginBottom: "0.5rem" }}>{inputVal.error.email}</p>
                                        </div>
                                        <div className='formOuterWrapper mt-2'>
                                            <button type="submit" className='btn btn btn-primary p-2 d-block m-auto'>Continue to Payment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PassengerDetail;