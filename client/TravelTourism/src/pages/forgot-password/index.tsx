import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [inputval, setInputVal] = useState({
        email: '',
        error: {
            email: '',
        }
    })

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        console.log(name, value);
        setInputVal((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            };
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        const notify = () => toast.success('Please check your email', {
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
        const { email } = inputval;
        const errors = {
            email: "",
        };
        let hasErrors = false;

        if (!email) {
            errors.email = "Email is required";
            hasErrors = true;
        } else if (!email.includes('@') || !email.includes('.')) {
            errors.email = "Invalid email";
            hasErrors = true;
        }


        if (!hasErrors) {
            try {
                const response = await axios.post('http://localhost:3000/forgotpassword', {
                    email: email,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data);
                console.log(`Password reset link sent to ${email}`);
                setInputVal({
                    email: '',
                    error: {
                        email: '',
                    },
                });
                notify();
                navigate('/');
            } catch (error) {
                console.log('error', error)
                errorNotify();
            }

        } else {
            console.log("object")
            setInputVal((prevalue) => {
                return {
                    ...prevalue,
                    error: errors,
                }
            });
        }

    };
    return (
        <div className="wrapper">
            <div className="containersforgot">
                <h1 className="title">Forgot Password?</h1>
                <form action="./action.php" method='post' onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        value={inputval.email}
                        name='email'
                        className="input"
                    />
                    <span style={{ fontSize: "1rem", color: "red", marginBottom: "0.9rem", marginTop: "-0.9rem", textAlign: "left", display: "block" }}>{inputval.error.email}</span>
                    <button type='submit' className="button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
