import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './Form.module.css';

const formatTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes();
  return `${hours}:${minutes}`;
};

const Form = ({ giveMeNewTask, closeModal }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    setTime(formatTime());
  }, []);

  const onSubmitForm = e => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(), title, description: desc, accomplished: false, deadline: time,
    };
    giveMeNewTask(newTask);
    closeModal();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add new task</h1>
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
