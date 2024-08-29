import { useState } from 'react';
import './index.css';
import { IoMdArrowForward } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const FormCard = () => {
    const [inputVal, setInputVal] = useState({
        name: "",
        email: "",
        tour: '',
        message: '',
        error: {
            name: '',
            email: '',
            tour: '',
            message: '',
        }
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        console.log(name, value)
        setInputVal((prevalue) => {
            return (
                {
                    ...prevalue,
                    [name]: value,
                }
            )
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const notify = () => toast.success('Form Submited Successfull', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        const errorNotify = () => toast.error('something is wrong', {
            position: "top-right",
            autoClose: 5000,
            pauseOnHover: true,
        });
        e.preventDefault();
        const { name, email, tour, message } = inputVal;
        const errors = {
            name: '',
            email: '',
            tour: '',
            message: '',
        }

        let hasError = false;
        if (!name) {
            errors.name = "Name is required";
            hasError = true;
        } else if (name.length < 2) {
            errors.name = "Name must be at least 2 characters long";
            hasError = true;
        }
        if (!email) {
            errors.email = "Email is required";
            hasError = true
        } else if (!email.includes('@')) {
            errors.email = "@ must be included";
            hasError = true;
        }
        if (!tour) {
            errors.tour = "Tour is required";
            hasError = true;
        }
        if (!message) {
            errors.message = "Message is required";
            hasError = true;
        }

        if (!hasError) {
            try {
                const response = await axios.post('http://localhost:3000/contact', {
                    name: inputVal.name,
                    email: inputVal.email,
                    tour: inputVal.tour,
                    message: inputVal.message,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 200) {
                    console.log('Form Submit Successfully');
                    setInputVal({
                        name: '',
                        email: '',
                        tour: '',
                        message: '',
                        error: {
                            name: '',
                            email: '',
                            tour: '',
                            message: '',
                        }
                    });
                    notify();
                }
            } catch (error) {
                console.log('error', error);
                errorNotify();
            }

        }
        else {
            setInputVal((prevalue) => {
                return (
                    { ...prevalue, error: errors }
                )
            });
        };
    }
    return (
        <div className='formOuter'>
            <h4 className='formHeading'>Drop Us a Line...</h4>
            <form action="./action.php" method="post" onSubmit={handleSubmit}>
                <div className="formWrapper">
                    <input type="text" name="name" value={inputVal.name} id="name" placeholder='Enter a Full Name' className='formControl' onChange={handleChange} />
                    <span className='formError'>{inputVal.error.name}</span>
                </div>
                <div className="formWrapper">
                    <input type="email" name="email" value={inputVal.email} id="email" placeholder='Enter a Email' className='formControl' onChange={handleChange} />
                    <span className='formError'>{inputVal.error.email}</span>
                </div>
                <div className="formWrapper">
                    <input type="text" name="tour" id="tour" value={inputVal.tour} placeholder='Enter a Tour Type' className='formControl' onChange={handleChange} />
                    <span className='formError'>{inputVal.error.tour}</span>
                </div>
                <div className='formWrapper'>
                    <textarea name="message" id="message" rows={3} value={inputVal.message} placeholder='Your Message' className='formControl' onChange={handleChange}></textarea>
                    <span className='formError'>{inputVal.error.message}</span>
                </div>
                <div className='formWrapper'>
                    <button type='submit' className='submitbtn'>Sent Now <IoMdArrowForward size={22} /></button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default FormCard;