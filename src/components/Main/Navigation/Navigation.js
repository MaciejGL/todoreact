import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Button from '../../common/Button/Button';
import styles from './Navigation.module.css';

const Navigation = ({ handleDay, toggleModal }) => (
  <nav className={styles.navigation}>
    <Button action={() => handleDay('-')} styles="primary dateBtnPrev">
      <FontAwesomeIcon icon={faChevronLeft} />
    </Button>

    <FontAwesomeIcon
      onClick={toggleModal}
      className={styles.addBtn}
      icon={faPlusSquare} />
    <Button action={() => handleDay('+')} styles="primary dateBtnNext">
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  </nav>
);

export default Navigation;
