import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "../contexts/UserContext";
import { app } from "../db/firebase"; // Import Firebase authentication
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore"; // Import Firestore functions
import styles from "@/styles/Login.module.css";
// const [showLoader, setShowLoader] = useState(false);

const auth = getAuth(app);
const db = getFirestore(app);

const Login = ({ setShowLogin }) => {
  const { userType, login } = useUser();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        setError("Please fill in both fields.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential && userCredential.user) {
        const user = userCredential.user;

        // Check userType and isTeacher
        if (userType === "teacher") {
          const userRef = collection(db, "Users");
          const q = query(userRef, where("email", "==", email));
          const snapshot = await getDocs(q);

          if (snapshot.docs.length > 0) {
            const userData = snapshot.docs[0].data();
            if (userData.isTeacher !== true) {
              setError("You are not authorized as a teacher.");
              return;
            }
          } else {
            setError("User not found in the database.");
            return;
          }
        }

        console.log("Successful login");
        console.log(userType);
        login(email, userType);
        router.push(`/${userType}`);
        setShowLogin(false); // Close the modal
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Authentication failed. Please check your credentials.");
    }
  };

  return (
    <div className={styles.login_container}>
      <button
        className={styles.close_button}
        onClick={() => setShowLogin(false)}
      >
        Close
      </button>
      <label className={styles.label}>
        Email:
        <input
          className={styles.login_input}
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className={styles.label}>
        Password:
        <input
          className={styles.login_input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className={styles.login_button} onClick={handleLogin}>
        Login
      </button>
      {error && <p className={styles.login_error}>{error}</p>}
    </div>
  );
};

export default Login;
