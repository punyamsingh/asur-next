import Login from "@/components/Login";
import React,{ useState,useEffect } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";
import AttendanceModal from './AttendanceModal';

const Student = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
                const response = await fetch('https://asur-ams.vercel.app/api/GetStudentViewWeb?rollNo=100');

                if (!response.ok) {
                    throw new Error('API request failed');
                }

                const apiData = await response.json();
                console.log(apiData);
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