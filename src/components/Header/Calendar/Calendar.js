import React from 'react';
import styles from './Calendar.module.css';

const Calendar = ({ date }) => {
  const dateFormatter = (dateType, dateFormat) => new Date(date).toLocaleDateString('en-US', { [dateType]: dateFormat });
  const day = dateFormatter('day', 'numeric').length === 1 ? `0${dateFormatter('day', 'numeric')}` : dateFormatter('day', 'numeric');
  const weekday = dateFormatter('weekday', 'long');
  const month = dateFormatter('month', 'long');
  const year = dateFormatter('year', 'numeric');

  return (
    <section className={styles.dateContainer}>
      <p className={styles.day}>{day}</p>
      <div className={styles.dateInnerContainer}>
        <p className={styles.month}>{month}</p>
        <p className={styles.year}>{year}</p>
      </div>
      <p className={styles.weekday}>{weekday}</p>
    </section>
  );
};
export default Calendar;
