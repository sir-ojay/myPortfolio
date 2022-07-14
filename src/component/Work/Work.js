import React from 'react';
import styles from "./work.module.css";
import Receive from '../../assets/receive.png';
import CRM from '../../assets/crm.png';
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi"



const Work = () => {
  return (
    <div className={styles["work-container"]} id="work">
      <h2 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
        {" "}
        Selected Projects{" "}
      </h2>

      <section className={styles["work-section"]}>
        <div className={styles["work-content"]}>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles["ojay"]}
          >
            <a href="https://paywith-receive.vercel.app/">
              <img src={Receive} alt="receiveImage" />
            </a>
            <div className={styles.chat}>
              <h3> Receive</h3>
              <div className={styles["details"]}>
                <p> React </p> <p> css </p> <p> Nodejs</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["work-content"]}>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="300"
            className={styles["ojay"]}
          >
            <a href="https://ojay-crm.netlify.app/">
              <img src={CRM} alt="crm" />
            </a>

            <div className={styles.chat} id={styles.crm}>
              <h3> Blueberry CRM </h3>
              <div className={styles["details"]}>
                <p> Reactjs</p>
                <p> css</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link to="/project">
        <div
          className={styles["box"]}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          <p>See more projects </p>
          <div className={styles.icon}>
            {" "}
            <HiArrowSmRight fontSize="1.2em" />{" "}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Work