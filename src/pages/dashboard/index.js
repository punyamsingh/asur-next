import { useUser } from '@/contexts/UserContext';
import Navbar from '@/components/Navbar'; // Import the Navbar component
import styles from '@/styles/Teacher.module.css';

export default function Dashboard() {
    const { user } = useUser();

    return (
        <div>
              {/* {user ? (
                <div>
                    <p>Hello, {user.email}</p>
                    <p>You are a {user.userType}</p> Display the user's type
                </div>
            ) : (
                <p>Please log in to see your dashboard.</p>
            )} */}

            <div className={styles.navigation_area}><Navbar/></div>

            <div className={styles.container}>
         
               
               <table className={styles.table}>
          
          <thead >
          <tr>
               <th id={styles.sno} className={styles.th}>S.No</th>
               <th id={styles.course_name} className={styles.th}>Course Name </th>
               <th id={styles.attendence} className={styles.th} >Initiate Attendence</th> 
               
          </tr>
          </thead>
        
        <tbody>
        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>

        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>

        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>

        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>

        <tr>
               <td>1</td>
               <td >Introduction to C Programming <br/> </td>
               <td id={styles.button}><button className={styles.button}>Initiate</button></td>
               
        </tr>


        
        
        </tbody>
       
      </table>
             

            </div>
          
        </div>
    );
}
