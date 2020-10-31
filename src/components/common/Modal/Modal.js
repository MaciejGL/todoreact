import React from 'react';

import styles from './Modal.module.css';
import closeIcon from '../../../assets/close.png';

const Modal = ({ children, closeModal }) => (
  <>
    <div onClick={closeModal} className={styles.background}>
    </div>
    <div className={styles.frame}>
      <img onClick={closeModal} className={styles.closeBtn} src={closeIcon} alt="close icon" />
      {children}
    </div>
  </>
);

export default Modal;
