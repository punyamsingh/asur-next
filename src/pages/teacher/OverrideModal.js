// OverrideModal.js
import React,{ useState } from 'react';
import styles from '@/styles/Records.module.css';

const OverrideModal = ({ closeModal,data }) => {
    const [selectedStatus,setSelectedStatus] = useState(data?.PorA);

    const handleSave = () => {
        // Perform save operation with selectedStatus
        // ...

        // Close the modal
        closeModal();
    };

    return (
        <div className={styles.modalBackground}>
            <div className={styles.overlay}>
                {/* <div className={styles.overlay} onClick={closeModal}></div> */}
                <div className={styles.modal}>
                    <div className={styles.modalContent}>

                        <button className={styles.closeButton} onClick={closeModal}>
                            &times;
                        </button>

                        <h2 className={styles.modalTitle}>Overriding Attendance</h2>

                        <div className={styles.attDetails}>
                            <div className={styles.attDetailsItems}>
                                <p>Date:</p>
                                <p>{new Date(data?.Date_marked).toLocaleDateString()}</p>
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
