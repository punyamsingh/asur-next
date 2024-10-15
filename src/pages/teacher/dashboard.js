import useSWR from "swr";
import Navbar from "./teacherNavbar";
import styles from "@/styles/Teacher.module.css";
import { useState,useEffect } from "react";
import { HashLoader,BeatLoader } from "react-spinners";

// Fetcher function to get data from the API
const fetcher = (url) => fetch(url).then((res) => res.json());

const Dashboard = () => {
  const { data: apiData,error } = useSWR("/api/GetCourseList",fetcher);
  const [liveCourses,setLiveCourses] = useState(new Set());
  const [courseData,setCourseData] = useState([]);
  const [loading,setLoading] = useState(true);

  // Function to handle live status toggle
  const handleInitiateClick = async (course_id) => {
    try {
      // Find the course by its id and mark it as loading
      const courseIndex = courseData.findIndex(
        (course) => course.subject_id === course_id
      );

      if (courseIndex >= 0) {
        const updatedCourseData = [...courseData];
        updatedCourseData[courseIndex].loading = true;
        setCourseData(updatedCourseData);
      }

      // Send request to toggle live status
      const response = await fetch("/api/toggleLive",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ course_id }),
      });

      if (response.ok) {
        const result = await response.json(); // Parse the response
        console.log("API Response:",result); // Log response to check status

        const updatedLiveCourses = new Set(liveCourses);

        // Update course data with new live status
        const updatedCourseData = courseData.map((course) => {
          if (course.subject_id === course_id) {
            const newLiveStatus =
              course.liveStatus === "Initiate" ? "End Class" : "Initiate";

            // Add or remove course from liveCourses set
            if (updatedLiveCourses.has(course_id)) {
              updatedLiveCourses.delete(course_id);
            } else {
              updatedLiveCourses.add(course_id);
            }

            return {
              ...course,
              loading: false,
              liveStatus: newLiveStatus,
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

  // Fetch and update the course data when API data is available
  useEffect(() => {
    if (apiData && apiData.length > 0) {
      console.log("Fetched data:",apiData); // Log the fetched data to verify
      const updatedCourseData = apiData.map((course) => ({
        ...course,
        liveStatus: course.live === "NL" ? "Initiate" : "End Class",
        loading: false, // Initialize loading state per course
      }));
      setCourseData(updatedCourseData);
      setLoading(false);
    }
  },[apiData]);

  // Render an error if fetching data fails
  if (error) {
    return (
      <div>
        <p>Error fetching data.</p>
      </div>
    );
  }

  // Main component return block
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
