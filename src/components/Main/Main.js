import React, { useState, useEffect } from 'react';
import moment from 'moment';

import styles from './Main.module.css';

import Tasks from './Tasks/Tasks';
import Modal from '../common/Modal/Modal';
import Form from './Form/Form';
import Navigation from './Navigation/Navigation';

const Main = ({ date, handleDay }) => {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [pending, setPending] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const filterBy = (status, createdAt) => status && moment(createdAt).format('L') === moment(date).format('L');

  useEffect(() => {
    setDone(tasks.filter(task => filterBy(task.accomplished, task.createdAt)));
    setPending(tasks.filter(task => filterBy(!task.accomplished, task.createdAt)));
  }, [tasks, date, filterBy]);

  const handleAddNewTask = task => setTasks([...tasks, task]);

  const toggleTaskStatus = taskToUpdate => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskToUpdate.id) {
        return {
          ...task,
          accomplished: !task.accomplished,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const removeTask = taskIdToRemove => setTasks(tasks.filter(task => task.id !== taskIdToRemove));

  const toggleModal = () => setOpenModal(!openModal);

  const modal = openModal
    && (
      <Modal toggleModal={toggleModal}>
        <Form giveMeNewTask={handleAddNewTask} toggleModal={toggleModal} date={date} />
      </Modal>
    );

  return (
    <div className={styles.container}>
      <Navigation handleDay={handleDay} toggleModal={toggleModal} />
      <Tasks
        title="Pending"
        tasks={pending}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask} />
      <Tasks
        title="Done"
        tasks={done}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask} />
      {modal}
    </div>
  );
};

export default Main;
