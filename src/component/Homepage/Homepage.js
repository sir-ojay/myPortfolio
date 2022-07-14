import React from 'react'
import Work from "../Work/Work";
import styles from "./homepage.module.css";
import { Link } from "react-router-dom";
import { HiArrowSmRight } from "react-icons/hi"

const Homepage = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["small-container"]}>
        <div className={styles["home-container"]}>
          <div className={styles["text"]}>
            <p
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="300"
            >
              Hi, I'm Sannu Ibrahim
            </p>

            <h1
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              {" "}
              Front End Developer
            </h1>

            <h3
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="400"
            >
              {" "}
              “Talk is cheap. Show me the code.” – Linus Torvalds
            </h3>
            <br />

            <Link to="/about">
              <div
                className={styles["box"]}
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="400"
              >
                <p>More about me </p>
                <div className={styles.icon}>
                  {" "}
                  <HiArrowSmRight fontSize="1.2em" />{" "}
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Work />

        <div className={styles.touch}>
          <h3> Open to opportunities & collaborations</h3>
          <a href="mailto:prince.ibrahim72@gmail.com"> Get in touch </a>
        </div>
      </div>
    </div>
  );
}

export default Homepage