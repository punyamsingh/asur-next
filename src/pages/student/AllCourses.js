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
                        <th id={styles.course_name} className={styles.th}>Course Name</th>
                        <th id={styles.attendence} className={styles.th}>Attendence</th>
                    </tr>
                </thead>
                <tbody>
                    {courseData?.map((course) => (
                        <tr key={course.id} onClick={() => openModal(course)}>
                            <td>{course.id}</td>
                            <td>
                                {course.name}
                                <br />
                                <span className={styles.instructor_name}>{course.instructor}</span>
                            </td>
                            <td>{course.attendance}</td>
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
