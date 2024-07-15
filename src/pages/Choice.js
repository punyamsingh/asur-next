import { useState } from "react";
import Login from "@/components/Login";
import { useUser } from "@/contexts/UserContext";
import styles from "@/styles/Choice.module.css";
import Head from "next/head";

export default function Choice() {
  const { setRole } = useUser();
  const [showLogin,setShowLogin] = useState(false);

  const handleShowLogin = (value) => {
    setRole(value);
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <>
      <div className={styles.main_container}>
        {showLogin && (
          <div className={styles.modal}>
            <div className={styles.modal_content}>
              <Login setShowLogin={setShowLogin} />
            </div>
          </div>
        )}

        <div className={styles.heading}>
          <img
            src="/assets/Asur text.png"
            alt="..."
            className={styles.logoImage} // Add a className for the image
          />
          <span className="wrap" aria-hidden="true">
            <span className={styles.particle} id={styles.p1}></span>
            <span className={styles.particle} id={styles.p2}></span>
            <span className={styles.particle} id={styles.p3}></span>
            <span className={styles.particle} id={styles.p4}></span>
            <span className={styles.particle} id={styles.p5}></span>
            <span className={styles.particle} id={styles.p6}></span>
            <span className={styles.particle} id={styles.p7}></span>
            <span className={styles.particle} id={styles.p8}></span>
            <span className={styles.particle} id={styles.p9}></span>
            <span className={styles.particle} id={styles.p10}></span>
            <span className={styles.particle} id={styles.p11}></span>
            <span className={styles.particle} id={styles.p12}></span>
          </span>
          <p className={styles.asur}>
            Attendance System Using Recognition
            <span className="wrap" aria-hidden="true">
              <span className={styles.particle} id={styles.p1}></span>
              <span className={styles.particle} id={styles.p2}></span>
              <span className={styles.particle} id={styles.p3}></span>
              <span className={styles.particle} id={styles.p4}></span>
              <span className={styles.particle} id={styles.p5}></span>
              <span className={styles.particle} id={styles.p6}></span>
              <span className={styles.particle} id={styles.p7}></span>
              <span className={styles.particle} id={styles.p8}></span>
              <span className={styles.particle} id={styles.p9}></span>
              <span className={styles.particle} id={styles.p10}></span>
              <span className={styles.particle} id={styles.p11}></span>
              <span className={styles.particle} id={styles.p12}></span>
            </span>
          </p>
          {/* <h1> ASUR </h1> */}
        </div>

        <div className={styles.cards_container}>
          <div className={styles.card} onClick={() => handleShowLogin("student")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1509/1509606.png"
              alt="Student Avatar"
              className={styles.card_image}
            />
            <button className={styles.card_button}>Student</button>
          </div>

          <div className={styles.card} onClick={() => handleShowLogin("teacher")}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/776/776251.png"
              alt="Teacher Avatar"
              className={styles.card_image}
            />
            <button className={styles.card_button}>Teacher</button>
          </div>
        </div>
      </div>
    </>
  );
}
