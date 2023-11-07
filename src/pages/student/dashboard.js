import useSWR from 'swr';
import { useState,useEffect } from 'react';
import Navbar from "./studentNavbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";
import { useUser } from '@/contexts/UserContext';
import { HashLoader } from 'react-spinners';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
    const { userType,user } = useUser();
    const [rollNumber,setRollNumber] = useState(null); // State to store roll number
    const [courseData,setCourseData] = useState([]);
    const [loading,setLoading] = useState(true);

    // Fetch the student's roll number outside of useEffect
    const { data: rollNumberData,error: rollNumberError } = useSWR(
        user ? `/api/GetRollNumFromEmail?email="${user.email}"` : null,
        fetcher
    );

    // Inside a useEffect, set the roll number if it's available
    useEffect(() => {
        if (rollNumberData) {
            // console.log(rollNumberData[0]?.roll_no);
            setRollNumber(rollNumberData[0]?.roll_no);
        }
    },[rollNumberData]);

    // Use rollNumber as a dependency for fetching the student data
    const { data: apiData,error: apiError } = useSWR(
        rollNumber ? `/api/GetStudentViewWeb?rollNo=${rollNumber}` : null,
        fetcher
    );

    useEffect(() => {
        if (apiData) {
            // Check if apiData is available
            // console.log(apiData);
            setCourseData(apiData);
            // Set loading to false when data is successfully fetched
            setLoading(false);
        }
    },[apiData]);

    if (apiError) {
        console.error('Error:',apiError);
        return (
            <div>
                <p>Error fetching data.</p>
            </div>
        );
    }

    return (
        <div>
            <div className={styles.navigation_area}>
                <Navbar />
            </div>

            {loading ? (
                <div className={styles.loader}>
                    <HashLoader color="red" loading={true} size={50} />
                </div>
            ) : (
                <AllCourses courseData={courseData} />
            )}
        </div>
    );
};

export default Dashboard;

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