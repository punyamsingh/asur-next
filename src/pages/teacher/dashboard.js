import useSWR from "swr";
import Navbar from "./teacherNavbar";
import styles from "@/styles/Teacher.module.css";
import { useState,useEffect } from "react";
import { HashLoader,BeatLoader } from "react-spinners";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data: apiData,error } = useSWR("/api/GetCourseList",fetcher);
  const [liveCourses,setLiveCourses] = useState(new Set());
  const [courseData,setCourseData] = useState([]);
  const [loading,setLoading] = useState(true);

  const handleInitiateClick = async (course_id) => {
    try {
      const courseIndex = courseData.findIndex(
        (course) => course.subject_id === course_id
      );

      if (courseIndex >= 0) {
        const updatedCourseData = [...courseData];
        updatedCourseData[courseIndex].loading = true;
        setCourseData(updatedCourseData);
      }

      const response = await fetch("https://asur-ams.vercel.app/api/toggleLive",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id }),
      });

      if (response.ok) {
        const updatedLiveCourses = new Set(liveCourses);
        if (updatedLiveCourses.has(course_id)) {
          updatedLiveCourses.delete(course_id);
        } else {
          updatedLiveCourses.add(course_id);
        }

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

        setLiveCourses(updatedLiveCourses);
        setCourseData(updatedCourseData);
      } else {
        console.error("Error:",response.statusText);
      }
    } catch (error) {
      console.error("Error:",error);
    }
  };

  useEffect(() => {
    if (apiData && apiData.length > 0) {
      const updatedCourseData = apiData.map((course) => ({
        ...course,
        liveStatus: course.live === "NL" ? "Initiate" : "End Class",
        loading: false, // Initialize loading state per course
      }));
      setCourseData(updatedCourseData);
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
                <th id={styles.sno} className={styles.th}>Course ID</th>
                <th id={styles.course_name} className={styles.th}>Course Name</th>
                <th id={styles.attendance} className={styles.th}>Initiate Attendance</th>
              </tr>
            </thead>
            <tbody>
              {courseData.length > 0 &&
                courseData.map((course,index) => (
                  <tr key={index}>
                    <td id={styles.sno}>{course.subject_id}</td>
                    <td id={styles.subName}>{course.subject_name}</td>
                    <td id={styles.button}>
                      <button
                        className={
                          course.liveStatus === "Initiate"
                            ? styles.nonActiveButton
                            : styles.activeButton
                        }
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
      )}
    </div>
  );
};

export default Dashboard;
