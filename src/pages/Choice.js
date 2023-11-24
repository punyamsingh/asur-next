import { useState } from "react";
import Login from "@/components/Login";
import { useUser } from "@/contexts/UserContext";
import styles from "@/styles/Choice.module.css";
import Head from "next/head";

export default function Choice() {
  const { setRole } = useUser();
  const [showLogin, setShowLogin] = useState(false);

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
        <Head>
          <meta charSet="UTF-8" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css' />

          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Orbitron&display=swap" rel="stylesheet" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
        </Head>

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
            className={styles.logoImage} // Add a class for the image
          />
          <span class="wrap" aria-hidden="true">
            <span class={styles.particle} id={styles.p1}></span>
            <span class={styles.particle} id={styles.p2}></span>
            <span class={styles.particle} id={styles.p3} ></span>
            <span class={styles.particle} id={styles.p4} ></span>
            <span class={styles.particle} id={styles.p5}></span>
            <span class={styles.particle} id={styles.p6} ></span>
            <span class={styles.particle} id={styles.p7} ></span>
            <span class={styles.particle} id={styles.p8} ></span>
            <span class={styles.particle} id={styles.p9} ></span>
            <span class={styles.particle} id={styles.p10} ></span>
            <span class={styles.particle} id={styles.p11}></span>
            <span class={styles.particle} id={styles.p12} ></span>
          </span>
          <p className={styles.asur}>Attendance System Using Recognition
            <span class="wrap" aria-hidden="true">
              <span class={styles.particle} id={styles.p1}></span>
              <span class={styles.particle} id={styles.p2}></span>
              <span class={styles.particle} id={styles.p3} ></span>
              <span class={styles.particle} id={styles.p4} ></span>
              <span class={styles.particle} id={styles.p5}></span>
              <span class={styles.particle} id={styles.p6} ></span>
              <span class={styles.particle} id={styles.p7} ></span>
              <span class={styles.particle} id={styles.p8} ></span>
              <span class={styles.particle} id={styles.p9} ></span>
              <span class={styles.particle} id={styles.p10} ></span>
              <span class={styles.particle} id={styles.p11}></span>
              <span class={styles.particle} id={styles.p12} ></span>
            </span>
          </p>
          {/* <h1> ASUR </h1> */}
        </div>

        <div className={styles.cards_container}>
          <div className={styles.card} onClick={() => handleShowLogin("student")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xfWdYfEPJTuwGxVwiTwI7WxI8c92mwmoOVQAowYoC1ByPUUiyCxOgscNPz73rwMcOro&usqp=CAU"
              alt="Student Avatar"
              className={styles.card_image}
            />
            <button className={styles.card_button}>Student</button>
          </div>

          <div className={styles.card} onClick={() => handleShowLogin("teacher")}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
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
