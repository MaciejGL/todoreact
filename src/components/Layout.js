import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Header from './Header/Header';
import Main from './Main/Main';

const Layout = () => {
  const [date, setDate] = useState(moment().format('MMM Do YYYY dddd'));
  const [day, setDay] = useState(0);

  useEffect(() => {
    setDate(moment().add(day, 'days'));
  }, [day]);

  const handleDay = operator => {
    if (operator === '-') {
      setDay(day - 1);
    }
    if (operator === '+') {
      setDay(day + 1);
    }
  };

  return (
    <div>
      <Header date={date} />
      <Main date={date} handleDay={handleDay} />
    </div>
  );
};

export default Layout;
