import { useState } from 'react';
import Login from '@/components/Login';
import { useUser } from '@/contexts/UserContext';
import styles from '@/styles/Choice.module.css';

export default function Choice() {
    const { setRole } = useUser();
    const [showLogin,setShowLogin] = useState(false);

    const handleShowLogin = (value) => {
        setRole(value);
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
                        <Login setShowLogin={setShowLogin} />
                    </div>
                </div>
            )}

            <div className={styles.heading}>
                Attendance System Using Recognition
                <h1> ASUR </h1>
                
            </div>

            <div className={styles.cards_container}>
                <div className={styles.card} onClick={() => handleShowLogin('student')}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xfWdYfEPJTuwGxVwiTwI7WxI8c92mwmoOVQAowYoC1ByPUUiyCxOgscNPz73rwMcOro&usqp=CAU"
                        alt="Student Avatar"
                        className={styles.card_image}
                    />
                    <button className={styles.card_button}>Student</button>
                </div>

                <div className={styles.card} onClick={() => handleShowLogin('teacher')}>
                    <img
                        src="https://www.w3schools.com/howto/img_avatar.png"
                        alt="Teacher Avatar"
                        className={styles.card_image}
                    />
                    <button className={styles.card_button}>Teacher</button>
                </div>
            </div>
        </div>
    );
}
