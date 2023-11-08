import useSWR from "swr";
import Navbar from "./teacherNavbar";
import styles from "@/styles/Teacher.module.css";
import { useState,useEffect } from "react";
import { HashLoader } from 'react-spinners';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data: apiData,error } = useSWR("/api/GetCourseList",fetcher);
  const [liveCourses,setLiveCourses] = useState(new Set());
  const [courseData,setCourseData] = useState([]);
  const [loading,setLoading] = useState(true);

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
        console.error("Error:",response.statusText);
      }
    } catch (error) {
      console.error("Error:",error);
    }
  };

  useEffect(() => {
    if (apiData) {
      // Update the courseData state with the live status
      const updatedCourseData = apiData.map((course) => ({
        ...course,
        liveStatus: course.LIVE === "NL" ? "Initiate" : "End Class",
      }));
      setCourseData(updatedCourseData);
      // Set loading to false when data is successfully fetched
      setLoading(false);
    }
  },[apiData]);

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

      {loading ? (
        <div className={styles.loader}>
          <HashLoader color="red" loading={true} size={50} />
        </div>
      ) : (
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
              <tr></tr>
              <tr></tr>
            </thead>

            <tbody>
              {courseData?.map((course,index) => (
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
                      {course.liveStatus}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
