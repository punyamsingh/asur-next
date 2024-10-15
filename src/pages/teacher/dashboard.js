import Navbar from "./teacherNavbar";
import styles from "@/styles/Teacher.module.css";
import { useState } from "react";
import { HashLoader,BeatLoader } from 'react-spinners';

const Dashboard = ({ initialCourseData }) => {
  const [liveCourses,setLiveCourses] = useState(new Set());
  const [courseData,setCourseData] = useState(initialCourseData);

  const handleInitiateClick = async (course_id) => {
    try {
      const courseToUpdate = courseData.find((course) => course.subject_id === course_id);
      if (courseToUpdate) {
        courseToUpdate.loading = true;
        setCourseData([...courseData]);
      }

      const response = await fetch("/api/toggleLive",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id }),
      });

      if (response.ok) {
        if (liveCourses.has(course_id)) {
          liveCourses.delete(course_id);
        } else {
          liveCourses.add(course_id);
        }
        setLiveCourses(new Set(liveCourses));

        // Update the live status and loading state of the course
        const updatedCourseData = courseData.map((course) => {
          if (course.subject_id === course_id) {
            return {
              ...course,
              loading: false,
              liveStatus: course.liveStatus === "Initiate" ? "End Class" : "Initiate",
            };
          }
          return course;
        });
        setCourseData(updatedCourseData);
      } else {
        console.error("Error:",response.statusText);
      }
    } catch (error) {
      console.error("Error:",error);
    }
  };

  return (
    <div>
      <div className={styles.navigation_area}>
        <Navbar />
      </div>

      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th id={styles.sno} className={styles.th}>
                Course ID
              </th>
              <th id={styles.course_name} className={styles.th}>
                Course Name
              </th>
              <th id={styles.attendance} className={styles.th}>
                Initiate Attendance
              </th>
            </tr>
          </thead>

          <tbody>
            {courseData.length > 0 && courseData.map((course,index) => (
              <tr key={index}>
                <td id={styles.sno}>{course.subject_id}</td>
                <td id={styles.subName}>{course.subject_name}</td>
                <td id={styles.button}>
                  <button
                    className={`${course.liveStatus === "Initiate" ? styles.nonActiveButton : styles.activeButton}`}
                    onClick={() => handleInitiateClick(course.subject_id)}
                  >
                    {course.loading ? (
                      <BeatLoader color="red" loading={true} />
                    ) : (
                      course.liveStatus
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Fetching data from the API on the server side
export async function getServerSideProps() {
  const response = await fetch("https://asur-ams.vercel.app/api/GetCourseList");
  const initialCourseData = await response.json();

  // Modify the response to add liveStatus to each course
  const modifiedCourseData = initialCourseData.map((course) => ({
    ...course,
    liveStatus: course.live === "NL" ? "Initiate" : "End Class",
  }));

  return {
    props: {
      initialCourseData: modifiedCourseData,
    },
  };
}

export default Dashboard;
