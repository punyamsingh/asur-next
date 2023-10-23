import { useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/UserContext';
import { auth } from '../db/firebase'; // Import Firebase authentication
import styles from '@/styles/Login.module.css';

const Login = () => {
    const { login } = useUser(); // Import the login function
    const router = useRouter();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const handleLogin = async () => {
        try {
            // Validate email and password (you can add more validation)
            if (!email || !password) {
                setError('Please fill in both fields.');
                return;
            }

            // Authenticate the user using Firebase authentication
            const userCredential = await auth?.signInWithEmailAndPassword(email,password);
            console.log("processing");
            console.log(userCredential)
            // Check if the authentication was successful
            if (userCredential && userCredential.user) {
                // Call the login function from the context and specify the role ('student' or 'teacher')
                console.log("success");
                login(email,'student'); // Replace 'student' with the appropriate role

                // Redirect to the dashboard
                router.push('/dashboard');
            } else {
                setError('Authentication failed. Please check your credentials.');
            }
        } catch (error) {
            setError('Authentication failed. Please check your credentials.');
        }
    };


    return (
        <div className={styles.login_container}>
            <label>
                Email:
                <input
                    className={styles.login_input}
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    className={styles.login_input}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <button className={styles.login_button} onClick={handleLogin}>
                Login
            </button>
            {error && <p className={styles.login_error}>{error}</p>}
        </div>
    );
};

export default Login;
