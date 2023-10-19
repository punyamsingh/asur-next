// Login.js
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';
import { useRouter } from 'next/router';

const Login = () => {
    const { login } = useUser();
    const router = useRouter();

    const handleLogin = () => {
        // Implement authentication logic based on email and password
        // For simplicity, let's assume successful authentication
        login('user@example.com','password123');

        // Redirect to the appropriate dashboard or home page
        router.push('/dashboard');
    };

    return (
        <div>
            <label>
                Email:
                <input type="text" />
            </label>
            <label>
                Password:
                <input type="password" />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
