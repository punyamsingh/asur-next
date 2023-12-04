import React, { useEffect, useState } from 'react';
import styles from "@/styles/Student.module.css";
import { useUser } from '@/contexts/UserContext';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());

const AttendanceModal = ({ course, onClose }) => {
    const { userType, user } = useUser();
    const [rollNumber, setRollNumber] = useState(null);
    const [courseId, setCourseId] = useState(null);
    const [studAtt, setStudAtt] = useState(null);

    const { data: rollNumberData, error: rollNumberError } = useSWR(
        user ? `/api/GetRollNumFromEmail?email="${user.email}"` : null,
        fetcher
    );

    const { data: studAttData, error: studAttError } = useSWR(
        rollNumber ? `/api/GetCourseWiseWebAtt?rollNo=${rollNumber}&courseId="${course.subject_id}"` : null,
        fetcher
    );

    useEffect(() => {
        // console.log("cpurse")
        // console.log(course)
        // setCourseId(course?.course_id);
    }, []);

    useEffect(() => {
        if (rollNumberData) {
            setRollNumber(rollNumberData[0]?.roll_no);
            // console.log(rollNumberData[0]?.roll_no)
            // console.log(rollNumber)
        }
    }, [rollNumberData]);

    useEffect(() => {
        if (studAttData) {
            setStudAtt(studAttData);
            // console.log(studAtt)
            // console.log("yoyoyo")
            // console.log(studAttData)
            setStudAtt(studAttData);
            // console.log("nonon")
            // console.log(studAtt)
        }
    }, [studAttData]);

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.modalHeader}>
                    <h2>Attendance Details</h2>
                    <button className={styles.closeButton} onClick={onClose}>
                        &times;
                    </button>
                </div>
                <div className={styles.modalContent}>
                    <h3><strong>Course ID:</strong> {course?.subject_id}</h3>
                    <h3><strong>Classroom:</strong> {course?.classroom_id}</h3>
                    {/* <p><strong>Instructor:</strong> {course?.instructor}</p>
                    <p><strong>Attendance Location:</strong> {course?.attendance}</p> */}
                    {/* Display attendance records in a table */}
                    {studAttData?(
                        <>
                            {/* <p><strong>COURSE ID:</strong> {course[0]?.Subject_ID}</p> */}
                            <table style={{color:'black'}} className={styles.attendanceTable}>
                            <thead>
                                <tr>
                                    {/* <th>Roll No</th>
                                    <th>Subject ID</th> */}
                                    <th>Date Marked</th>
                                    {/* <th>Time Marked</th> */}
                                    <th>Attendance Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studAttData?.map((record, index) => (
                                    // <li key={index}>
                                    //     {record.Subject_ID}
                                    // </li>
                                    <tr key={index}>
                                        {/* <li>
                                        {record.Date_marked}
                                        </li> */}
                                        {/* <td>{record.Roll_No}</td>
                                        <td>{record.Subject_ID}</td> */}
                                        {record.Date_marked.split('T')[0]==="0999-12-31" || record.Date_marked.split('T')[0]==="1000-01-01" ?(
                                            <>
                                        <td>Default</td>
                                        {/* <td>Default</td> */}
                                        </>):(
                                            <>
                                        <td>{record.Date_marked.split('T')[0]}</td>
                                        {/* <td>{record.Date_marked.split('T')[1]}</td> */}
                                        </>)}
                                        {/* <td>{record.Date_marked}</td> */}
                                        <td>{record.PorA}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </>
                    ):(
                        <p>Loading</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AttendanceModal;
