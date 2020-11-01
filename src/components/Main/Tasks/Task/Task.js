import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import styles from './Task.module.css';

const Task = ({ task, toggleTaskStatus, removeTask }) => {
  const statusStyle = [styles.listItem];
  const titleStyle = [styles.taskTitle];

  const status = task.accomplished;

  if (status) {
    statusStyle.push(styles.done);
    titleStyle.push(styles.done);
  } else {
    statusStyle.push(styles.pending);
    titleStyle.push(styles.pending);
  }

  const deleteBtn = status
    && (
      <FontAwesomeIcon
        onClick={() => removeTask(task.id)}
        className={styles.delete}
        icon={faTrashAlt} />
    );

  return (
    <div className={styles.div}>
      <li onClick={e => toggleTaskStatus(task, e)} className={statusStyle.join(' ')}>
        <div className={styles.details}>
          <p className={titleStyle.join(' ')}>{task.title}</p>
          <p className={styles.taskDescription}>{task.description}</p>
        </div>
        <p className={styles.taskEst}>{task.deadline}</p>
      </li>
      {deleteBtn}
    </div>
  );
};

export default Task;
