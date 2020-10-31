import React from 'react';

import styles from './Header.module.css';
import logo from '../../assets/Plan.png';

const Header = () => {
  const dateFormatter = (dateType, dateFormat) => new Date().toLocaleDateString('en-US', { [dateType]: dateFormat });
  const day = dateFormatter('day', 'numeric').length === 1 ? `0${dateFormatter('day', 'numeric')}` : dateFormatter('day', 'numeric');
  const weekday = dateFormatter('weekday', 'long');
  const month = dateFormatter('month', 'long');
  const year = dateFormatter('year', 'numeric');

  return (
    <div className={styles.headerContainer}>
      <section className={styles.dateContainer}>
        <p className={styles.day}>{day}</p>
        <div className={styles.dateInnerContainer}>
          <p className={styles.month}>{month}</p>
          <p className={styles.year}>{year}</p>
        </div>
        <p className={styles.weekday}>{weekday}</p>

      </section>
      <img src={logo} alt="logo PlanIt.now" />
    </div>
  );
};

export default Header;
