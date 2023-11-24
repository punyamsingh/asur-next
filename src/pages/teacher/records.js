// Records.js

import React,{ useState,useEffect } from 'react';
import Navbar from './teacherNavbar';
import useSWR from 'swr';
import styles from '@/styles/Records.module.css';
import LoadingBar from 'react-top-loading-bar';
import { BeatLoader } from 'react-spinners';
import OverrideModal from './OverrideModal'; // Import the OverrideModal component
import {format} from 'date-fns'; // Import the format function from date-fns

const fetcher = (url) => fetch(url).then((res) => res.json());

const Records = () => {
    const [rollNumber,setRollNumber] = useState('');
    const [loading,setLoading] = useState(false);
    const [progress,setProgress] = useState(0);
    const [data,setData] = useState([]);
    const [selectedRow,setSelectedRow] = useState(null); // To track the selected row

    const handleGoButtonClick = async () => {
        try {
            setLoading(true);
            setProgress(30);

            const response = await fetcher(`/api/GetStudentAttendance?rollNo=${rollNumber}`);
            setProgress(60);

            if (Array.isArray(response)) {
                setData(response);
            }
        } catch (error) {
            console.error('Error fetching attendance data:',error);
        } finally {
            setProgress(100);
            setLoading(false);
        }
    };

    const openModal = (rowData) => {
        setSelectedRow(rowData);
    };

    const closeModal = () => {
        setSelectedRow(null);
    };



    const handleClearButtonClick = () => {
        setRollNumber('');
        setData([]);
    };

    const formatDate = (date) => {
        const formattedDate = format(new Date(date),'yyyy-MM-dd');
        return formattedDate;
        // const options = { year: 'numeric',month: '2-digit',day: '2-digit' };
        // return new Date(isoDate).toLocaleDateString('en-US',options);
    };

    return (
        <div>
            <div className={styles.navigationBar}>
                <Navbar />
            </div>
            <div className={styles.container}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        placeholder="Enter Roll Number"
                        className={styles.inputField}
                        value={rollNumber}
                        onChange={(e) => setRollNumber(e.target.value)}
                    />
                    <button className={styles.goButton} onClick={handleGoButtonClick}>
                        Go
                    </button>
                    <button className={styles.clearButton} onClick={handleClearButtonClick}>
                        Clear
                    </button>
                </div>
                <div className={styles.tableContainer}>
                    <LoadingBar color="#902c2e" progress={progress} onLoaderFinished={() => setProgress(0)} />
                    {loading && <BeatLoader color="red" loading={true} size={15} />}
                    {data.length > 0 ? (
                        <div className={styles.dataContainer}>
                            {data.map((record,index) => (
                                <div
                                    key={index}
                                    className={`${styles.recordContainer} ${selectedRow === record ? styles.selectedRow : ''
                                        }`}
                                    onClick={() => openModal(record)}
                                >
                                    <div className={styles.courseID}>{record.Subject_ID}</div>
                                    <div className={styles.dateMarked}>
                                        {formatDate(record.Date_marked)}
                                        {/* {record.Date_marked} */}
                                    </div>
                                    <div className={styles.presence}>
                                        {record.PorA === 'P' ? 'Present' : 'Absent'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className={styles.errorMessage}>
                            {Array.isArray(data) ? 'No records found' : 'Data format is not as expected.'}
                        </p>
                    )}
                </div>
            </div>
            {selectedRow && (
                <OverrideModal closeModal={closeModal} data={selectedRow} rollNumber={rollNumber} />
            )}
        </div>
    );
};

export default Records;