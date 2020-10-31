import React, { useState, useEffect } from 'react';

import addBtnIcon from '../../assets/addButton.png';
import styles from './Main.module.css';

import Tasks from './Tasks/Tasks';
import Modal from '../common/Modal/Modal';
import Form from './Form/Form';

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

const Main = () => {
  const [tasks, setTasks] = useState([]);
  const [done, setDone] = useState([]);
  const [pending, setPending] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setDone(tasks.filter(task => task.accomplished));
    setPending(tasks.filter(task => !task.accomplished));
  }, [tasks]);

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

  const closeModal = () => setOpenModal(false);

  let modal;
  if (openModal) {
    modal = <Modal closeModal={closeModal}>
      <Form giveMeNewTask={handleAddNewTask} closeModal={closeModal} />
    </Modal>;
  }

  // const pendingTasks = pending.length > 0
  //   && (<Tasks
  //     className={styles.tasks}
  //     title="Pending"
  //     tasks={pending}
  //     toggleTaskStatus={toggleTaskStatus}
  //     removeTask={removeTask} />);

  // const doneTasks = done.length > 0
  //   && (<Tasks
  //     className={styles.tasks}
  //     title="Done"
  //     tasks={done}
  //     toggleTaskStatus={toggleTaskStatus}
  //     removeTask={removeTask} />);

  // const noTasks = !doneTasks && !pendingTasks
  //   && (<p className={styles.noTasks}>Alright, let's plan something new for today!</p>);
  return (
    <div className={styles.container}>
      <button className={styles.addBtn} onClick={() => setOpenModal(true)}><img src={addBtnIcon} alt="Add Icon" /></button>
      <Tasks
        className={styles.tasks}
        title="Pending"
        tasks={pending}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask} />
      <Tasks
        className={styles.tasks}
        title="Done"
        tasks={done}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask} />
      {modal}
    </div>
  );
};

export default Main;
