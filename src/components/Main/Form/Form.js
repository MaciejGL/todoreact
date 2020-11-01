import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

import styles from './Form.module.css';

const Form = ({ giveMeNewTask, toggleModal, date }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setTime(moment().format('HH:mm'));
  }, []);

  const validate = value => {
    if (!value.trim()) {
      throw new Error('Title is required.');
    }
    if (value.trim().length < 3) {
      throw new Error('Title needs to have minimum 3 characters.');
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    try {
      validate(title);
      const newTask = {
        id: uuidv4(),
        title,
        description: desc,
        accomplished: false,
        deadline: time,
        createdAt: date,
      };
      giveMeNewTask(newTask);
      toggleModal();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add new task</h1>
      {error && <p className={styles.error}>{error}</p>}
      <form className={styles.addTask} onSubmit={e => onSubmitForm(e)}>
        <input autoFocus className={styles.taskTitle} onChange={e => setTitle(e.target.value)} value={title} type="text" placeholder="Tile" required />
        <input className={styles.taskDescription} onChange={e => setDesc(e.target.value)} value={desc} type="text" placeholder="Short description" maxLength="80" />
        <input className={styles.time} onChange={e => setTime(e.target.value)} value={time} type="time" name="time" id="time" />
        <input className={styles.submit} type="submit" value="Add" />
      </form>
    </div>
  );
};
export default Form;
