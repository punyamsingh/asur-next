import React,{ useState } from "react";
import styles from "@/styles/Student.module.css";
import AttendanceModal from "./AttendanceModal";

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
            <div className={styles.courseList}>
                {courseData?.length === 0 ? (
                    <div className={styles.noCourse}>No courses found</div>
                ) : (
                    courseData?.map((course,index) => (
                        <div
                            key={course.subject_id}
                            className={styles.tableRowEven}
                            onClick={() => openModal(course)}
                        >
                            <div className={styles.cell}>
                                <div className={styles.courseInfo}>
                                    <div className={styles.courseID}>{course.subject_id}</div>
                                    <div className={styles.teacherName}>{course.teachername}</div>
                                </div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.courseName}>{course.subject_name}</div>
                            </div>
                            <div className={styles.cell}>
                                <div className={styles.pieChart}>
                                    {/* Render a pie chart for attendance percent */}
                                    Present: {course.attendance_percent}%
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {selectedCourse && (
                <AttendanceModal course={selectedCourse} onClose={closeModal} />
            )}
        </div>
    );
};

export default AllCourses;
