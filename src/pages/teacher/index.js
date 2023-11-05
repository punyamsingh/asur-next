import React from 'react';
import Login from '@/components/Login';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Teacher.module.css';
import { useState } from 'react';

export async function getServerSideProps(context) {
    // const[deptName,SetDeptName]=useState('');
    try {
        const response = await fetch(`https://asur-ams.vercel.app/api/GetCourseList`);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const apiData = await response.json();
        console.log(apiData)
        return {
            props: {
                apiData
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            notFound: true, // or handle the error in your preferred way
        };
    }
}



const Teacher = ({ apiData }) => {
    const [liveCourses, setLiveCourses] = useState(new Set());

  const handleInitiateClick = async (course_id) => {
    try {
      const response = await fetch('https://asur-ams.vercel.app/api/toggleLive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
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
                S.No
              </th>
              <th id={styles.course_name} className={styles.th}>
                Course Name
              </th>
              <th id={styles.attendence} className={styles.th}>
                Initiate Attendence
              </th>
            </tr>
          </thead>

          <tbody>
            {apiData?.map((course, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {course.Subject_Name} <br />
                </td>
                <td id={styles.button}>
                  <button
                    className={styles.button}
                    onClick={() => handleInitiateClick(course.Subject_ID)}
                  >
                    {liveCourses.has(course.Subject_ID) ? 'End Class' : 'Initiate'}
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
  
  export default Teacher;
// const Teacher = () => {
//     return (
//         <div>
//             <div className={styles.navigation_area}>
//                 <Navbar />
//             </div>

//             <div className={styles.container}>


//                 <table className={styles.table}>

//                     <thead >
//                         <tr>
//                             <th id={styles.sno} className={styles.th}>S.No</th>
//                             <th id={styles.course_name} className={styles.th}>Course Name </th>
//                             <th id={styles.attendence} className={styles.th} >Initiate Attendence</th>

//                         </tr>
//                     </thead>

//                     <tbody>
//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>

//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>

//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>

//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>


//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>

//                         <tr>
//                             <td>1</td>
//                             <td >Introduction to C Programming <br /> </td>
//                             <td id={styles.button}><button className={styles.button}>Initiate</button></td>

//                         </tr>




//                     </tbody>

//                 </table>


//             </div>

//         </div>
//     );
// };

// export default Teacher;

// export default function TeacherLogin() {
//     return <Login />;
// }
