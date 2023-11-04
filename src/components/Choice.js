import Head from 'next/head';
import { useState } from 'react';
import Login from './Login'; // Import the Login component
import { useUser } from '../contexts/UserContext';
import style from '../styles/Choice.module.css';
import { Router } from 'next/router';

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
                    <div className={style.heading}>

                        Attendence System using Recognition

                    </div>


                    <div className={style.upper_choice_div}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xfWdYfEPJTuwGxVwiTwI7WxI8c92mwmoOVQAowYoC1ByPUUiyCxOgscNPz73rwMcOro&usqp=CAU" alt="Avatar" className={style.avatar} />
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={style.avatar} />


                    </div>

                    <div className={style.lower_choice_div}>

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



                    </div>
                </>
            )}


        </div>
    );
}