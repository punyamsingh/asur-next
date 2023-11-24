import React from 'react';
// import { useUser } from '../../contexts/UserContext';
import { useUser } from '@/contexts/UserContext';
import Choice from '@/pages/Choice';
import Navbar from "./teacherNavbar";
import records from '@/styles/Records.module.css';

const Records = () => {
    return (
        <div>
            <div className={records.navigation_bar}>
                <Navbar />
            </div>
            {/* make an input field for roll number and a go button and then display a table of attendance records below */}
            <div className={records.container}>
                <div className={records.input}>
                    <input type="text" placeholder="Enter Roll Number" className={records.input_field} />
                    <button className={records.go_button}>Go</button>
                </div>
                <div className={records.table_container}>
                    <table className={records.table}>
                        <tr>
                            <th>Subject</th>
                            <th>Attendance</th>
                        </tr>
                        <tr>
                            <td>Subject 1</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <td>Subject 2</td>
                            <td>80%</td>
                        </tr>
                        <tr>
                            <td>Subject 3</td>
                            <td>90%</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Records;
