import React,{ useState } from 'react';
import styles from "@/styles/Student.module.css";
import AttendanceModal from './AttendanceModal';

const AllCourses = ({ courseData }) => {
    const [selectedCourse,setSelectedCourse] = useState(null);

    const openModal = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th id={styles.sno} className={styles.th}>S.No</th>
                        <th id={styles.id} className={styles.th}>Course ID</th>
                        <th id={styles.course_name} className={styles.th}>Course Name</th>
                        <th id={styles.attendence} className={styles.th}>Instructor Name</th>
                        <th id={styles.attendence} className={styles.th}>Location</th>
                        <th id={styles.attendence} className={styles.th}>Attendance %</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData?.map((course,index) => (
                        <tr key={course.subject_id} onClick={() => openModal(course)}>
                            <td>{index + 1}</td>
                            <td>{course.subject_id}</td>
                            <td>{course.subject_name}</td>
                            <td>{course.teachername}</td>
                            <td>{course.classroom_id}</td>
                            <td>{course.attendance_percent}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedCourse && (
                <AttendanceModal
                    course={selectedCourse}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default AllCourses;
