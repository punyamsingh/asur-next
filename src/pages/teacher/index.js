import React,{ useState,useEffect } from 'react';
import styles from '@/styles/Teacher.module.css';
import Dashboard from './dashboard';

const Teacher = ({ apiData }) => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default Teacher;
