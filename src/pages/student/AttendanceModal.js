import React from 'react';
import styles from "@/styles/Student.module.css";

const AttendanceModal = ({ course,onClose }) => {
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
                    <h3>{course?.name}</h3>
                    <p><strong>Instructor:</strong> {course?.instructor}</p>
                    <p><strong>Attendance Location:</strong> {course?.attendance}</p>
                    {/* Display attendance records here */}
                    <ul>
                        {course?.attendanceRecords?.map((record,index) => (
                            <li key={index}>{record}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AttendanceModal;
