import React from 'react';
import styles from './about.module.css'

const About = () => {
  return (
    <div className={styles["about-container"]} id="about">
      <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="300">
        {" "}
        About Me.
      </h1>

      <div className={styles["about-content"]}>
        <section className={styles["text"]}>
          <div>
            <a href="https://drive.google.com/file/d/1q7OVReQe00k77JGAAeLGgK407ctVucpE/view?usp=sharing">
              View my resume{" "}
            </a>{" "}
            or
            <a href="http://github.com/sir-ojay">Visit my Github profile </a>
            <p>
              Hi, I'm Sannu Ibrahim Ojeabu. I am a detail-oriented developer
              passionate about beautifying codes with nice interfaces and
              flawless functionalities.I have experience developing and
              designing web interfaces from simple landing pages to multi-paged
              web applications. My most recent team is startup-22 where we are
              building a great payment gateway that is affordable for business
              owners and easy for developers to extend and integrate into their
              websites and applications.
            </p>
            <p>
              {" "}
              In second quater of 2022, I also did a 3 month internship with the
              renowned Side hustle internship team, where we built an amazing
              product called Receive. The product will be launched soon{" "}
              <a href="https://paywith-receive.vercel.app/">link here</a>
            </p>
            <p>
              I'm also passionate about teaching others about tech. I engage a
              lot of newbies by teaching them from scratch and equipping them
              with the right resources. The more reason why I started teaching
              kids in schools where I mentor a lot of young interns in my area.
            </p>
            <p>
              {" "}
              I’m familiar with technologies such as Bootstrap, JavaScript,
              React, CSS, SCSS,styled-component, TailwindCSS.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About