import React from 'react';
import './Button.css';

const Button = ({ children, styles, action }) => (
  <div className={`btn ${styles}`} onClick={action}>
    <p>{children}</p>
  </div>
);

export default Button;
