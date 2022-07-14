import React from 'react'
import "./Button.css";

const Button = ({ button }) => {
  return (
    <div className="box">
      <h4> {button} </h4>
    </div>
  );
};

export default Button