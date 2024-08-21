import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';

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

    const handleSubmit = (e: { preventDefault: () => void; }) => {
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
            console.log(`Password reset link sent to ${email}`);
            setInputVal({
                email: '',
                error: {
                    email: '',
                },
            })
            navigate('/login');
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
