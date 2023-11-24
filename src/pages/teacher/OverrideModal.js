// OverrideModal.js
import React,{ useState } from 'react';
import styles from '@/styles/Records.module.css';
import { format } from 'date-fns'; // Import the format function from date-fns


const OverrideModal = ({ closeModal,data }) => {
    const [selectedStatus,setSelectedStatus] = useState(data?.PorA);

    const handleSave = async () => {
        try {
            const values = {
                stud_id: data?.Roll_No.toString(),
                course_id: data?.Subject_ID.toString(),
                date: formatDate(data?.Date_marked).toString(),
                attendance_status: selectedStatus.toString(),
            };
            console.log(values);
            const response = await fetch('/api/MarkAttendance',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

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
            {console.log(data)}
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
                                <p>{data?.Subject_ID}</p>
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
