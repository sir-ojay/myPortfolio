import React from "react";
import styles from "./footer.module.css";
import { FaTwitter, FaLinkedin, FaGithub , FaCopyright} from "react-icons/fa";
import styled from "styled-components";

const Twitter = styled(FaTwitter)`
  margin-right: 0.8em;
  font-size: 1.2em;
`;
const Linkedin = styled(FaLinkedin)`
  margin-right: 0.8em;
  font-size: 1.2em;
`;
const Github = styled(FaGithub)`
  margin-right: 0.8em;
  font-size: 1.2em;
`;
const Copyright = styled(FaCopyright)`
  font-size: 1.0em;
 
`;

const Footer = () => {
  return (
    <div className={styles["footer"]}>
      <p> Connect with me on social media </p>
      <div className={styles["footer-links"]}>
        <a href="https://www.twitter.com/@ibrahimSannu">
          {" "}
          <Twitter />{" "}
        </a>
        <a href="https://www.linkedin.com/in/ibrahim-ojeabu-sannu-b5bb70149?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwTgICx4LQ%2BKaMy9yDDaPbg%3D%3D">
          {" "}
          <Linkedin />{" "}
        </a>
        <a href="https://github.com/sir-ojay">
          {" "}
          <Github />
        </a>
      </div>
      <p>
        {" "}
        OJAY <Copyright />
        2022 All Rights Reserved.{" "}
      </p>
    </div>
  );
};

export default Footer;
