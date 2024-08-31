import { useNavigate } from "react-router-dom";
import { FC, useEffect } from "react";

const Protected = ({ Component }: { Component: FC }) => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login', { replace: true });
        }
    });
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected