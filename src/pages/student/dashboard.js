import useSWR from 'swr';
import Navbar from "./studentNavbar";
import styles from "@/styles/Student.module.css";
import AllCourses from "@/pages/student/AllCourses";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
    const { data: apiData,error } = useSWR('/api/GetStudentViewWeb?rollNo=100',fetcher);

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

            {!apiData ? (
                <p>Loading...</p>
            ) : (
                <AllCourses courseData={apiData} />
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