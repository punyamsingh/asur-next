import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/styles/Student.module.css";

const Student = () => {
    return (
        <div>
            <div className={styles.navigation_area}>
                <Navbar />
            </div>

            <div className={styles.container}>
                <table className={styles.table}>

                    <thead >
                        <tr>
                            <th id={styles.sno} className={styles.th}>S.No</th>
                            <th id={styles.course_name} className={styles.th}>Course Name </th>
                            <th id={styles.attendence} className={styles.th}>Attendence</th>

                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Introduction to C Programming <br /> <span className={styles.instructor_name}>Harish Karnik</span> </td>
                            <td>Germany</td>

                        </tr>




                    </tbody>

                </table>
            </div>

            {/* <h1>Student</h1> */}
            {/* <Login /> */}
        </div>
    );
};

export default Student;


// pages/student/index.js

// export default function StudentLogin() {
//     return <Login />;
// }
