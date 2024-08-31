import { useState } from 'react';
import './index.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { id, token } = useParams();
    const [inputval, setInputVal] = useState({
        password: '',
        confirmPassword: '',
        error: {
            password: '',
            confirmPassword: '',
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
        const notify = () => toast.success('Password update successfully', {
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
        const { password, confirmPassword } = inputval;
        const errors = {
            password: "",
            confirmPassword: '',
        };
        let hasErrors = false;

        if (!password) {
            errors.password = "Password is required";
            hasErrors = true;
        } else if (password.length < 8) {
            errors.password = "Password must be 8 character long";
            hasErrors = true;
        }
        if (!confirmPassword) {
            errors.confirmPassword = "Confirm Password is required";
            hasErrors = true;
        } else if (confirmPassword.length < 8) {
            errors.confirmPassword = "Confirm Password must be 8 character long";
            hasErrors = true;
        } else if (confirmPassword !== password) {
            errors.confirmPassword = "Confirm Password does not match with Password";
            hasErrors = true;
        }


        if (!hasErrors) {
            try {
                const response = await axios.post(`http://localhost:3000/resetpassword/${id}/${token}`, {
                    password: password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response.data);
                setInputVal({
                    password: '',
                    confirmPassword: '',
                    error: {
                        password: '',
                        confirmPassword: '',
                    },
                });
                notify();
                navigate('/');
            } catch (error) {
                console.error('Axios error:', error);
                errorNotify();
            }

        } else {
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
                <h1 className="title">Reset Password?</h1>
                <form action="./action.php" method='post' onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        value={inputval.password}
                        name='password'
                        className="input"
                    />
                    <span style={{ fontSize: "1rem", color: "red", marginBottom: "0.9rem", marginTop: "-0.9rem", textAlign: "left", display: "block" }}>{inputval.error.password}</span>
                    <input
                        type="text"
                        placeholder="Enter your Confirm password"
                        onChange={handleChange}
                        value={inputval.confirmPassword}
                        name='confirmPassword'
                        className="input"
                    />
                    <span style={{ fontSize: "1rem", color: "red", marginBottom: "0.9rem", marginTop: "-0.9rem", textAlign: "left", display: "block" }}>{inputval.error.confirmPassword}</span>
                    <button type='submit' className="button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
