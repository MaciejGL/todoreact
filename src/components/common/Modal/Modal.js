import React from 'react';

import styles from './Modal.module.css';
import closeIcon from '../../../assets/close.png';

const Modal = ({ children, toggleModal }) => (
  <>
    <div onClick={toggleModal} className={styles.background}>
    </div>
    <div className={styles.frame}>
      <img onClick={toggleModal} className={styles.closeBtn} src={closeIcon} alt="close icon" />
      {children}
    </div>
  </>
);

export default Modal;
