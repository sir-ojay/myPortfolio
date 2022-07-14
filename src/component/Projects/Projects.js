import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi";
import Receive from '../../assets/receive.png';
import CRM from '../../assets/crm.png'

const Work = () => {
  return (
    <div className={styles["work-container"]} id="work">
      <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
        {" "}
        Projects.{" "}
      </h1>

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
                {/* <h3>About Receive</h3> */}
                {/* <p>
                  {" "}
                  Receive is a webpayment platform that is trusted and proven
                  for usage by developers and business people. The API is used
                  by developers and businesspeople to process payments for their
                  enterprises. includes awesome innovations like cryptocurrency
                  payments and QR code scanners.
                </p> */}

                <p> React </p>
                <p>css</p>
                <p>nodejs </p>
              </div>
              <div>
                {" "}
                {/* <p> React, Nodejs</p>{" "} */}
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

            <div className={styles.chat}>
              <h3>Blueberry CRM</h3>
              <div className={styles["details"]}>
                {/* <h3>Blueberry CRM</h3> */}
                {/* <p>
                  {" "}
                  Ojay crm is a web application that helps organisations to 
                    manage their customers
                </p> */}
                <p> Stacks : Html, Css, JavaScript,</p>
                <p> Reactjs</p>
                
              </div>
            </div>
          </div>
        </div>
       
      </section>

      <Link to="/about">
        <div
          className={styles["box"]}
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          <p>See my resume </p>
          <div className={styles.icon}>
            {" "}
            <HiArrowSmRight fontSize="1.2em" />{" "}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Work;
