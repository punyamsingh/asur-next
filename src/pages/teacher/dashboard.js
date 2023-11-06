import useSWR from "swr";
import Navbar from "./teacherNavbar";
import styles from "@/styles/Teacher.module.css";
import { useState, useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data: apiData, error } = useSWR("/api/GetCourseList", fetcher);
  const [liveCourses, setLiveCourses] = useState(new Set());

  // Initialize apiData as an empty array
  const [courseData, setCourseData] = useState([]);

  const handleInitiateClick = async (course_id) => {
    try {
      const response = await fetch(
        "https://asur-ams.vercel.app/api/toggleLive",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ course_id }),
        }
      );

      if (response.ok) {
        if (liveCourses.has(course_id)) {
          liveCourses.delete(course_id);
        } else {
          liveCourses.add(course_id);
        }
        setLiveCourses(new Set(liveCourses));
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (apiData) {
      setCourseData(apiData);
    }
  }, [apiData]);

  if (error) {
    return (
      <div>
        <p>Error fetching data.</p>
      </div>
    );
  }

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
                S.No
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
            {courseData?.map((course, index) => (
              <tr key={index}>
                <td id={styles.sno}>{index + 1}</td>
                <td id={styles.subName}>
                  {course.Subject_Name} <br />
                </td>
                <td id={styles.button}>
                  <button
                    className={styles.button}
                    onClick={() => handleInitiateClick(course.Subject_ID)}
                  >
                    {liveCourses.has(course.Subject_ID)
                      ? "End Class"
                      : "Initiate"}
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

export default Dashboard;
