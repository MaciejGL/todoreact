import React from 'react';

import styles from './Tasks.module.css';

import Task from './Task/Task';

const Tasks = ({
  tasks, title, toggleTaskStatus, removeTask,
}) => {
  const tasksJsx = tasks
    .map(task => (
      <Task
        key={task.id}
        task={task}
        toggleTaskStatus={toggleTaskStatus}
        removeTask={removeTask} />
    ));

  return (
    <div className={styles.tasksWrapper}>
      <p className={`${styles.tasksTitle} ${title === 'Pending' ? styles.pending : styles.done}`}>
        <span className={styles.title}>{title}</span>
        <span className={styles.score}>{tasks.length}</span>
      </p>
      <ul className={styles.tasksContainer}>
        {(tasks.length < 1 && title === 'Pending') && <p className={styles.noMoreTasks}>Let&apos;s plan something.</p>}
        {(tasks.length < 1 && title === 'Done')
          && <p className={styles.noMoreTasks}>Nothing accomplished yet.</p>}
        {tasksJsx}
      </ul>
    </div>
  );
};

export default Tasks;
