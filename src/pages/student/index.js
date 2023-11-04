import Login from "@/components/Login";
import React,{ useState,useEffect } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";
import AttendanceModal from './AttendanceModal';

const Student = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    const courseData = [
        {
            subject_id: 'CSD101',
            subject_name: 'Introduction to C Programming',
            classroom_id: 'D217',
            teachername: 'Harish Karnik',
            attendance_percent: 66.77,
        },
        {
            subject_id: 'MAT202',
            subject_name: 'Advanced Mathematics',
            classroom_id: 'E102',
            teachername: 'Linda Johnson',
            attendance_percent: 78.92,
        },
        {
            subject_id: 'ENG105',
            subject_name: 'English Composition',
            classroom_id: 'B311',
            teachername: 'David Smith',
            attendance_percent: 88.45,
        },
        {
            subject_id: 'PHY301',
            subject_name: 'Physics for Engineers',
            classroom_id: 'A205',
            teachername: 'Alice Brown',
            attendance_percent: 72.34,
        },
        {
            subject_id: 'CHE201',
            subject_name: 'Chemistry Fundamentals',
            classroom_id: 'C114',
            teachername: 'Robert Wilson',
            attendance_percent: 65.89,
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
                const response = await fetch('YOUR_API_ENDPOINT');

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const apiData = await response.json();
                setData(apiData); // Set the fetched data in the state
                setLoading(false); // Update loading state
            } catch (error) {
                console.error('API request failed:',error);
                // setLoading(false); // Update loading state in case of an error
            }
        };

        fetchData();
    },[]);

    return (
        <div>
            <div className={styles.navigation_area}>
                <Navbar />
            </div>

            {loading ? (
                <p>Loading...</p>
            ) : (
                <AllCourses courseData={data} />
            )}
        </div>
    );
};

export default Student;


// Define your course data here (replace this with your actual data)
// const courseData = [
//     {
//         id: 1,
//         name: 'Introduction to C Programming',
//         attendance: 'D217',
//         instructor: 'Harish Karnik',
//         attendanceRecords: [], // Add attendance records for this course
//     },
//     {
//         id: 2,
//         name: 'Physics 101',
//         attendance: 'B108',
//         instructor: 'Mayukh Majumder',
//         attendanceRecords: [], // Add attendance records for this course
//     },
//     {
//         id: 3,
//         name: 'Introduction to Python Programming',
//         attendance: 'D217',
//         instructor: 'Harish Karnik',
//         attendanceRecords: [], // Add attendance records for this course
//     },
//     {
//         id: 4,
//         name: 'Introduction to C++ Programming',
//         attendance: 'D217',
//         instructor: 'Harish Karnik',
//         attendanceRecords: [], // Add attendance records for this course
//     },
//     {
//         id: 5,
//         name: 'Introduction to Java Programming',
//         attendance: 'D217',
//         instructor: 'Harish Karnik',
//         attendanceRecords: [], // Add attendance records for this course
//     },
// ];