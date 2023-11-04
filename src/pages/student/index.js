import Login from "@/components/Login";
import React,{ useState } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";
import AttendanceModal from './AttendanceModal';

const Student = () => {

    // Define your course data here (replace this with your actual data)
    const courseData = [
        {
            id: 1,
            name: 'Introduction to C Programming',
            attendance: 'D217',
            instructor: 'Harish Karnik',
            attendanceRecords: [], // Add attendance records for this course
        },
        {
            id: 2,
            name: 'Physics 101',
            attendance: 'B108',
            instructor: 'Mayukh Majumder',
            attendanceRecords: [], // Add attendance records for this course
        },
        {
            id: 3,
            name: 'Introduction to Python Programming',
            attendance: 'D217',
            instructor: 'Harish Karnik',
            attendanceRecords: [], // Add attendance records for this course
        },
        {
            id: 4,
            name: 'Introduction to C++ Programming',
            attendance: 'D217',
            instructor: 'Harish Karnik',
            attendanceRecords: [], // Add attendance records for this course
        },
        {
            id: 5,
            name: 'Introduction to Java Programming',
            attendance: 'D217',
            instructor: 'Harish Karnik',
            attendanceRecords: [], // Add attendance records for this course
        },
    ];

    const [data,setData] = useState(courseData);

    return (
        <div>
            <div className={styles.navigation_area}>
                <Navbar />
            </div>

            <AllCourses courseData={data} />

        </div>
    );
};

export default Student;


// pages/student/index.js

// export default function StudentLogin() {
//     return <Login />;
// }
