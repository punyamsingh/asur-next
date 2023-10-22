import Head from 'next/head';
import { useUser } from '../contexts/UserContext';
import style from '../styles/Choice.module.css';


export default function Choice() {
    // const { userType,setStudent,setTeacher } = useUser();

    return (
        <div className={style.main_container}>
        <div className={style.student}>

            <button className={style.button} onClick={() => setStudent()}>Student</button>

        </div>

            <div className={style.teacher}>
            <button className={style.button} onClick={() => setTeacher()}>Teacher</button>
            </div>
        </div>
    );
}

// function SomeComponent() {
//     const { userType } = useUser();

//     return (
//         <div>
//             {userType ? `You are a ${userType}` : 'Please select a user type'}
//         </div>
//     );
// }
