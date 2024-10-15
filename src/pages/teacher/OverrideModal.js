import React,{ useState } from 'react';
import styles from '@/styles/Records.module.css';
import { format } from 'date-fns';
import LoadingBar from 'react-top-loading-bar'; // Import the LoadingBar component

const OverrideModal = ({ closeModal,data }) => {
    const [selectedStatus,setSelectedStatus] = useState(data?.PorA);
    const [progress,setProgress] = useState(0); // State to manage loading bar progress

    const handleSave = async () => {
        try {
            setProgress(30); // Set initial progress

            const values = {
                stud_id: data?.Roll_No.toString(),
                course_id: data?.subject_id.toString(),
                date: formatDate(data?.Date_marked).toString(),
                attendance_status: selectedStatus.toString(),
            };

            const response = await fetch('/api/MarkAttendance',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            setProgress(60); // Set progress after fetching data

            if (response.ok) {
                // Perform any other operations if needed
                // ...

                // Close the modal
                closeModal();
            } else {
                console.error('Error marking attendance:',response.statusText);
                // Handle error, e.g., show an error message to the user
            }
        } catch (error) {
            console.error('Error marking attendance:',error);
            // Handle error, e.g., show an error message to the user
        } finally {
            setProgress(100); // Set progress to 100 after the operation is complete
        }
    };

    const formatDate = (date) => {
        try {
            const formattedDate = format(new Date(date),'yyyy-MM-dd');
            return formattedDate;
        } catch (error) {
            console.error('Error formatting date:',error);
            return 'Invalid Date';
        }
    };

    return (
        <div className={styles.modalBackground}>
            <LoadingBar color="#ffffff" height={5} progress={progress} onLoaderFinished={() => setProgress(0)} />
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </button>

                        <h2 className={styles.modalTitle}>Overriding Attendance</h2>

                        <div className={styles.attDetails}>
                            <div className={styles.attDetailsItems}>
                                <p>Date:</p>
                                <p>{formatDate(data?.Date_marked)}</p>
                            </div>
                            <div className={styles.attDetailsItems}>
                                <p>Course ID:</p>
                                <p>{data?.subject_id}</p>
                            </div>
                            <div className={styles.attDetailsItems}>
                                <label>
                                    Choose Attendance Status:
                                    <select
                                        value={selectedStatus}
                                        onChange={(e) => setSelectedStatus(e.target.value)}
                                        className={styles.statusSelect}
                                    >
                                        <option value="P">Present</option>
                                        <option value="A">Absent</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <button className={styles.choiceButton} onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverrideModal;