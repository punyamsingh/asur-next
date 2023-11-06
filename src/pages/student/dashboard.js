import useSWR from 'swr';
import { useState,useEffect } from 'react'; // Import useState and useEffect
import Navbar from "./studentNavbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
    const sample = [
        {
            courseID: 1,
            subject_id: 'Introduction to C Programming',
            attendance: 'D217',
            teachername: 'Harish Karnik',
            attendanceRecords: [], // Add attendance records for this course
        },
        {
            courseID: 2,
            subject_id: 'Physics 101',
            attendance: 'B108',
            teachername: 'Mayukh Majumder',
            attendanceRecords: [], // Add attendance records for this course
        }];

    const { data: apiData,error } = useSWR('/api/GetStudentViewWeb?rollNo=100',fetcher);
    const [courseData,setCourseData] = useState(sample); // Initialize as an empty array

    useEffect(() => {
        if (apiData) {
            // Check if apiData is available
            setCourseData(apiData);
        }
    },[apiData]); // Update courseData when apiData changes

    if (error) {
        console.error('Error:',error);
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

            {courseData.length === 0 ? ( // Check courseData
                <p>Loading...</p>
            ) : (
                <AllCourses courseData={courseData} /> // Use courseData
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