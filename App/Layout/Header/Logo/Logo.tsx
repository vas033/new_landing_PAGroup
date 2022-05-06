import React from 'react';
import styles from './logo.css';
import logo from '../../../src/img/Antipof_logotype.svg';

export function Logo() {
  return (
    <div className={styles.headerLogoDiv}>
      <img className={styles.headerLogo} src={logo} alt="logo" />
      <p className={styles.logoTitle}>
<<<<<<< HEAD
<<<<<<< HEAD
        <span className={styles.logoTitleDesc}>команда <br/> разработки</span>
=======
        <span className={styles.logoTitleDesc}>креативная <br /> команда</span>
>>>>>>> 44c7d9121dca8b046cf90d63b12894c3ebfa3491
=======
        <span className={styles.logoTitleDesc}>креативная <br/> команда</span>
>>>>>>> 70dac32021fc62c2301aaaa6e19b8a9624f8f152
      </p>
    </div>
  );
}
