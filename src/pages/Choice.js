import { useState } from 'react';
import Login from '@/components/Login';
import { useUser } from '@/contexts/UserContext';
import styles from '@/styles/Choice.module.css';

export default function Choice() {
    const { setRole } = useUser();
    const [showLogin,setShowLogin] = useState(false);

    const handleShowLogin = (value) => {
        setRole(value);
        console.log(value)
        setShowLogin(true);
    };

    const closeLoginModal = () => {
        setShowLogin(false);
    };

    return (
        <div className={styles.main_container}>
            {showLogin && (
                <div className={styles.modal}>
                    <div className={styles.modal_content}>
                        <button className={styles.close_button} onClick={closeLoginModal}>
                            Close
                        </button>
                        <Login />
                    </div>
                </div>
            )}

            <div className={styles.heading}>

                Attendence System using Recognition

            </div>


            <div className={styles.upper_choice_div}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xfWdYfEPJTuwGxVwiTwI7WxI8c92mwmoOVQAowYoC1ByPUUiyCxOgscNPz73rwMcOro&usqp=CAU" alt="Avatar" className={styles.avatar} />
                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar} />


            </div>

            <div className={styles.lower_choice_div}>
                <div className={styles.student}>
                    <button className={styles.button} onClick={() => handleShowLogin('student')}>
                        Student
                    </button>
                </div>
                <div className={styles.teacher}>
                    <button className={styles.button} onClick={() => handleShowLogin('teacher')}>
                        Teacher
                    </button>
                </div>
            </div>
        </div>

        // <div className={styles.main_container}>
        //     {showLogin ? (
        //         <Login /> // Render the Login component when showLogin is true
        //     ) : (
        //         <>
        //             <div className={styles.heading}>

        //                 Attendence System using Recognition

        //             </div>


        //             <div className={styles.upper_choice_div}>
        //                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xfWdYfEPJTuwGxVwiTwI7WxI8c92mwmoOVQAowYoC1ByPUUiyCxOgscNPz73rwMcOro&usqp=CAU" alt="Avatar" className={styles.avatar} />
        //                 <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className={styles.avatar} />


        //             </div>

        //             <div className={styles.lower_choice_div}>
        //                 <div className={styles.student}>
        //                     <button className={styles.button} onClick={() => navigateToRolePage('student')}>
        //                         Student
        //                     </button>
        //                 </div>

        //                 <div className={styles.teacher}>
        //                     <button className={styles.button} onClick={() => navigateToRolePage('teacher')}>
        //                         Teacher
        //                     </button>
        //                 </div>
        //             </div>
        //         </>
        //     )}


        // </div>
    );
}