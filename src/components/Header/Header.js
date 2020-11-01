import React from 'react';

import styles from './Header.module.css';
import Calendar from './Calendar/Calendar';
import logo from '../../assets/Plan.png';

const Header = ({ date }) => (
  <div className={styles.headerContainer}>
    <div className={styles.wrapper}>
      <Calendar date={date} />
      <img src={logo} alt="logo PlanIt.now" />
    </div>
  </div>
);

export default Header;
