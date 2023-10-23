import Head from 'next/head';
import { useState } from 'react';
import Login from './Login'; // Import the Login component
import { useUser } from '../contexts/UserContext';
import style from '../styles/Choice.module.css';

export default function Choice() {
    const { setRole } = useUser(); // Use the setRole function
    const [showLogin,setShowLogin] = useState(false);

    const handleShowLogin = () => {
        setShowLogin(true);
    };

    return (
        <div className={style.main_container}>
            {showLogin ? (
                <Login /> // Render the Login component when showLogin is true
            ) : (
                <>
                    <div className={style.student}>
                        <button className={style.button} onClick={() => setRole('student')}>
                            Student
                        </button>
                    </div>

                    <div className={style.teacher}>
                        <button className={style.button} onClick={() => setRole('teacher')}>
                            Teacher
                        </button>
                    </div>
                </>
            )}


        </div>
    );
}