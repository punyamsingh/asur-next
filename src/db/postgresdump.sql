-- Supabase SQL Dump
-- Version: PostgreSQL
-- Host: your_supabase_host
-- Generation Time: Jul 10, 2024
-- Server version: PostgreSQL 13+
-- Generated by ChatGPT-4o

-- Start a transaction
BEGIN;

-- Table structure for table `attendance_details`
CREATE TABLE public.attendance_details (
    Roll_No integer NOT NULL,
    Subject_ID text NOT NULL,
    Date_marked date NOT NULL DEFAULT '0000-00-00',
    PorA char(1),
    Percentage double precision DEFAULT 0
);

-- Dumping data for table `attendance_details`
INSERT INTO public.attendance_details (Roll_No, Subject_ID, Date_marked, PorA, Percentage) VALUES
(100, 'CCC708', '1000-01-01', 'P', 0),
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

-- Table structure for table `classroom`
CREATE TABLE public.classroom (
    Room_ID text NOT NULL,
    centerX double precision,
    centerY double precision,
    Semi_Major_Axis double precision,
    Semi_Minor_Axis double precision,
    Altitude double precision,
    Error double precision,
    Capacity integer
);

-- Dumping data for table `classroom`
INSERT INTO public.classroom (Room_ID, centerX, centerY, Semi_Major_Axis, Semi_Minor_Axis, Altitude, Error, Capacity) VALUES
('D007', 28.5254083, 77.5755172, 6.05, 4, 0, 0, 80);

-- Table structure for table `student`
CREATE TABLE public.student (
    Roll_No serial PRIMARY KEY,
    First_Name text NOT NULL,
    Last_Name text,
    DOB date,
    Picture_URL text,
    net_id text
);

-- Dumping data for table `student`
INSERT INTO public.student (Roll_No, First_Name, Last_Name, DOB, Picture_URL, net_id) VALUES
(100, 'Rahul', 'Kohli', '2002-11-05', 'www.google.com', 'rk123'),
(101, 'Rahul', 'Kohli', '2002-11-05', 'www.google.com', 'rk123'),
(102, 'Rahul', 'Gupta', '2002-11-05', NULL, 'rk123'),
(103, 'Aayush', 'Arora', '2003-02-11', NULL, 'undefined'),
(104, 'Aayush', 'Arora', '2003-02-11', NULL, 'undefined'),
(105, 'Aayush', 'Arora', '2003-02-11', NULL, 'aa373'),
(106, 'Aayush', 'Gupta', '2004-02-11', NULL, 'aa921'),
(107, 'Aayush', 'Gupta', '2004-02-11', NULL, 'aa921'),
(108, 'Punyam', 'Gupta', '2004-11-11', NULL, 'pg987'),
(117, 'Arnav', 'Verma', '2001-12-11', NULL, 'av234'),
(118, 'Divyam', 'Singh ', '2002-10-17', NULL, 'divyamsing'),
(119, 'Aayush', 'Arora ', '2002-10-17', NULL, 'aayush.aro'),
(120, 'rahulkrait', '', '2002-10-17', NULL, 'kraitdevel'),
(400, 'aayushFiserv', '', '2002-10-17', NULL, 'aayushfise'),
(401, 'rjdj', '', '2002-10-17', NULL, 'rj345@gmail.com');

-- Table structure for table `studenttosubject`
CREATE TABLE public.studenttosubject (
    Roll_No integer NOT NULL,
    Subject_id text NOT NULL
);

-- Dumping data for table `studenttosubject`
INSERT INTO public.studenttosubject (Roll_No, Subject_id) VALUES
(108, 'CCC708'),
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

-- Table structure for table `subject`
CREATE TABLE public.subject (
    Subject_ID text PRIMARY KEY,
    Subject_Name text NOT NULL,
    Classroom_ID text NOT NULL,
    Teacher_ID text NOT NULL,
    Start_Time time NOT NULL,
    End_Time time NOT NULL,
    Seats integer,
    LIVE char(2) DEFAULT 'NL',
    TeacherName text
);

-- Dumping data for table `subject`
INSERT INTO public.subject (Subject_ID, Subject_Name, Classroom_ID, Teacher_ID, Start_Time, End_Time, Seats, LIVE, TeacherName) VALUES
('CCC708', 'Genetic Engineering', 'B012', 'zJS104', '16:00:00', '17:00:00', 60, 'NL', 'Deepak Sehgal'),
('CSD101', 'Intro to C', 'D007', 'zAS100', '09:00:00', '10:30:00', 130, 'NL', 'Snehasis Mukherjee'),
('CSD102', 'Data Structures & Algo.', 'C309', 'zPT101', '10:30:00', '12:00:00', 140, 'NL', 'Saurabh Shigwan'),
('CSD311', 'Artifical Intelligence', 'B315', 'zBL102', '14:00:00', '15:00:00', 150, 'NL', 'Snehasis Mukherjee'),
('MAT376', 'Machine Learning - Hands on', 'D313', 'zRM103', '15:00:00', '16:00:00', 60, 'NL', 'Snehasis Mukherjee');

-- Indexes for dumped tables
-- Indexes for table `attendance_details`
CREATE INDEX index_date ON public.attendance_details (Date_marked);

-- Indexes for table `studenttosubject`
CREATE INDEX studenttosubject_subject_id_idx ON public.studenttosubject (Subject_id);

-- Indexes for table `subject`
CREATE INDEX subject_start_time_idx ON public.subject (Start_Time);

-- Foreign key constraints
-- Constraints for table `studenttosubject`
ALTER TABLE public.studenttosubject
    ADD CONSTRAINT studenttosubject_roll_no_fkey FOREIGN KEY (Roll_No) REFERENCES public.student (Roll_No),
    ADD CONSTRAINT studenttosubject_subject_id_fkey FOREIGN KEY (Subject_id) REFERENCES public.subject (Subject_ID);

-- Commit the transaction
COMMIT;
