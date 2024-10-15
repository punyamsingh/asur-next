-- phpMyAdmin SQL Dump
-- version 4.7.1
-- https://www.phpmyadmin.net/
--
-- Host: sql12.freesqldatabase.com
-- Generation Time: Jul 10, 2024 at 01:05 PM
-- Server version: 5.5.62-0ubuntu0.14.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.16
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Database: `sql12719142`
--
-- --------------------------------------------------------
--
-- Table structure for table `attendance_details`
--
CREATE TABLE `attendance_details` (
  `roll_no` int(11) NOT NULL,
  `subject_id` varchar(10) NOT NULL,
  `date_marked` date NOT NULL DEFAULT '0000-00-00',
  `pora` varchar(5) DEFAULT NULL,
  `percentage` double DEFAULT '0'
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
--
-- Dumping data for table `attendance_details`
--
INSERT INTO `attendance_details` (
    `roll_no`,
    `subject_id`,
    `date_marked`,
    `pora`,
    `percentage`
  )
VALUES (100, 'CCC708', '1000-01-01', 'P', 0),
  (100, 'CCC708', '2023-09-11', 'A', 0),
  (100, 'CSD101', '1000-01-01', 'P', 0),
  (100, 'CSD101', '2023-09-10', 'P', 0),
  (100, 'CSD101', '2023-09-11', 'A', 0),
  (100, 'CSD101', '2023-09-14', 'A', 0),
  (100, 'CSD102', '1000-01-01', 'P', 0),
  (100, 'CSD102', '2023-09-11', 'P', 0),
  (100, 'CSD311', '1000-01-01', 'P', 0),
  (100, 'CSD311', '2023-08-11', 'A', 0),
  (100, 'CSD311', '2023-08-12', 'P', 0),
  (100, 'MAT376', '1000-01-01', 'P', 0),
  (100, 'MAT376', '2023-08-12', 'P', 0),
  (101, 'CSD101', '2023-09-10', 'P', 0),
  (101, 'CSD101', '2023-09-11', 'P', 0),
  (102, 'CSD101', '2023-09-10', 'P', 0),
  (103, 'CSD101', '2023-09-10', 'A', 0),
  (105, 'CSD101', '2023-09-10', 'A', 0),
  (400, 'CCC708', '1000-01-01', 'P', 0),
  (400, 'CSD101', '1000-01-01', 'P', 0),
  (400, 'CSD102', '1000-01-01', 'P', 0),
  (400, 'CSD311', '1000-01-01', 'P', 0),
  (400, 'MAT376', '1000-01-01', 'P', 0),
  (401, 'CCC708', '1000-01-01', 'P', 0),
  (401, 'CSD101', '1000-01-01', 'P', 0),
  (401, 'CSD102', '1000-01-01', 'P', 0),
  (401, 'CSD311', '1000-01-01', 'P', 0),
  (401, 'MAT376', '1000-01-01', 'P', 0);
-- --------------------------------------------------------
--
-- Table structure for table `classroom`
--
CREATE TABLE `classroom` (
  `Room_ID` varchar(10) NOT NULL,
  `centerX` double DEFAULT NULL,
  `centerY` double DEFAULT NULL,
  `Semi_Major_Axis` double DEFAULT NULL,
  `Semi_Minor_Axis` double DEFAULT NULL,
  `Altitude` double DEFAULT NULL,
  `Error` double DEFAULT NULL,
  `Capacity` int(11) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
--
-- Dumping data for table `classroom`
--
INSERT INTO `classroom` (
    `Room_ID`,
    `centerX`,
    `centerY`,
    `Semi_Major_Axis`,
    `Semi_Minor_Axis`,
    `Altitude`,
    `Error`,
    `Capacity`
  )
VALUES (
    'D007',
    28.5254083,
    77.5755172,
    6.05,
    4,
    0,
    0,
    80
  );
-- --------------------------------------------------------
--
-- Table structure for table `student`
--
CREATE TABLE `student` (
  `roll_no` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `picture_url` varchar(255) DEFAULT NULL,
  `net_id` varchar(40) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
--
-- Dumping data for table `student`
--
INSERT INTO `student` (
    `roll_no`,
    `first_name`,
    `last_name`,
    `dob`,
    `picture_url`,
    `net_id`
  )
VALUES (
    100,
    'Rahul',
    'Kohli',
    '2002-11-05',
    'www.google.com',
    'rk123'
  ),
  (
    101,
    'Rahul',
    'Kohli',
    '2002-11-05',
    'www.google.com',
    'rk123'
  ),
  (
    102,
    'Rahul',
    'Gupta',
    '2002-11-05',
    NULL,
    'rk123'
  ),
  (
    103,
    'Aayush',
    'Arora',
    '2003-02-11',
    NULL,
    'undefined'
  ),
  (
    104,
    'Aayush',
    'Arora',
    '2003-02-11',
    NULL,
    'undefined'
  ),
  (
    105,
    'Aayush',
    'Arora',
    '2003-02-11',
    NULL,
    'aa373'
  ),
  (
    106,
    'Aayush',
    'Gupta',
    '2004-02-11',
    NULL,
    'aa921'
  ),
  (
    107,
    'Aayush',
    'Gupta',
    '2004-02-11',
    NULL,
    'aa921'
  ),
  (
    108,
    'Punyam',
    'Gupta',
    '2004-11-11',
    NULL,
    'pg987'
  ),
  (
    117,
    'Arnav',
    'Verma',
    '2001-12-11',
    NULL,
    'av234'
  ),
  (
    118,
    'Divyam',
    'Singh ',
    '2002-10-17',
    NULL,
    'divyamsing'
  ),
  (
    119,
    'Aayush',
    'Arora ',
    '2002-10-17',
    NULL,
    'aayush.aro'
  ),
  (
    120,
    'rahulkrait',
    '',
    '2002-10-17',
    NULL,
    'kraitdevel'
  ),
  (
    400,
    'aayushFiserv',
    '',
    '2002-10-17',
    NULL,
    'aayushfise'
  ),
  (
    401,
    'rjdj',
    '',
    '2002-10-17',
    NULL,
    'rj345@gmail.com'
  );
-- --------------------------------------------------------
--
-- Table structure for table `studenttosubject`
--
CREATE TABLE `studenttosubject` (
  `roll_no` int(11) NOT NULL,
  `subject_id` varchar(10) NOT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
--
-- Dumping data for table `studenttosubject`
--
INSERT INTO `studenttosubject` (`roll_no`, `subject_id`)
VALUES (108, 'CCC708'),
  (117, 'CCC708'),
  (118, 'CCC708'),
  (119, 'CCC708'),
  (120, 'CCC708'),
  (400, 'CCC708'),
  (401, 'CCC708'),
  (108, 'CSD101'),
  (117, 'CSD101'),
  (118, 'CSD101'),
  (119, 'CSD101'),
  (120, 'CSD101'),
  (400, 'CSD101'),
  (401, 'CSD101'),
  (108, 'CSD102'),
  (117, 'CSD102'),
  (118, 'CSD102'),
  (119, 'CSD102'),
  (120, 'CSD102'),
  (400, 'CSD102'),
  (401, 'CSD102'),
  (108, 'CSD311'),
  (117, 'CSD311'),
  (118, 'CSD311'),
  (119, 'CSD311'),
  (120, 'CSD311'),
  (400, 'CSD311'),
  (401, 'CSD311'),
  (108, 'MAT376'),
  (117, 'MAT376'),
  (118, 'MAT376'),
  (119, 'MAT376'),
  (120, 'MAT376'),
  (400, 'MAT376'),
  (401, 'MAT376');
-- --------------------------------------------------------
--
-- Table structure for table `subject`
--
CREATE TABLE `subject` (
  `subject_id` varchar(10) NOT NULL,
  `subject_name` varchar(50) NOT NULL,
  `classroom_id` varchar(10) NOT NULL,
  `teacher_id` varchar(10) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `seats` int(11) DEFAULT NULL,
  `live` enum('L', 'NL') DEFAULT 'NL',
  `teachername` varchar(30) DEFAULT NULL
) ENGINE = InnoDB DEFAULT CHARSET = latin1;
--
-- Dumping data for table `subject`
--
INSERT INTO `subject` (
    `subject_id`,
    `subject_name`,
    `classroom_id`,
    `teacher_id`,
    `start_time`,
    `end_time`,
    `seats`,
    `live`,
    `teachername`
  )
VALUES (
    'CCC708',
    'Genetic Engineering',
    'B012',
    'zJS104',
    '16:00:00',
    '17:00:00',
    60,
    'NL',
    'Deepak Sehgal'
  ),
  (
    'CSD101',
    'Intro to C',
    'D007',
    'zAS100',
    '09:00:00',
    '10:30:00',
    130,
    'NL',
    'Snehasis Mukherjee'
  ),
  (
    'CSD102',
    'Data Structures & Algo.',
    'C309',
    'zPT101',
    '10:30:00',
    '12:00:00',
    140,
    'NL',
    'Saurabh Shigwan'
  ),
  (
    'CSD311',
    'Artifical Intelligence',
    'B315',
    'zBL102',
    '14:00:00',
    '15:00:00',
    150,
    'NL',
    'Snehasis Mukherjee'
  ),
  (
    'MAT376',
    'Machine Learning - Hands on',
    'D313',
    'zRM103',
    '15:00:00',
    '16:00:00',
    60,
    'NL',
    'Snehasis Mukherjee'
  );
--
-- Indexes for dumped tables
--
--
-- Indexes for table `attendance_details`
--
ALTER TABLE `attendance_details`
ADD PRIMARY KEY (`roll_no`, `subject_id`, `date_marked`),
  ADD KEY `index_date` (`date_marked`);
--
-- Indexes for table `classroom`
--
ALTER TABLE `classroom`
ADD PRIMARY KEY (`Room_ID`);
--
-- Indexes for table `student`
--
ALTER TABLE `student`
ADD PRIMARY KEY (`roll_no`);
--
-- Indexes for table `studenttosubject`
--
ALTER TABLE `studenttosubject`
ADD PRIMARY KEY (`roll_no`, `subject_id`),
  ADD KEY `subject_id` (`subject_id`);
--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
ADD PRIMARY KEY (`subject_id`),
  ADD KEY `index_start_time` (`start_time`);
--
-- AUTO_INCREMENT for dumped tables
--
--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
MODIFY `roll_no` int(11) NOT NULL AUTO_INCREMENT,
  AUTO_INCREMENT = 402;
--
-- Constraints for dumped tables
--
--
-- Constraints for table `studenttosubject`
--
ALTER TABLE `studenttosubject`
ADD CONSTRAINT `studenttosubject_ibfk_1` FOREIGN KEY (`roll_no`) REFERENCES `student` (`roll_no`),
  ADD CONSTRAINT `studenttosubject_ibfk_2` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`subject_id`);
COMMIT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;