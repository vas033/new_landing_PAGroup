import React, { useEffect, useState } from 'react';
import styles from './navheader.css';
import burger from './burger.css';
import navList from '../../arrays/navHeader';

export function NavHeader() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {navList.map(el =>
          <a className={styles.navLink} href={el.link} key={navList.indexOf(el)} onClick={() => {}} >
            {el.name}
          </a>
        )}
      </nav>
      <div>
        <button
          id='ru'
          className={styles.langBtn + ' ' + styles.active}
          onClick={(e) => {
            const btn = e.currentTarget;
            const eng = document.getElementById('eng');
            eng?.classList.contains(styles.active) ? eng?.classList.remove(styles.active) : '';
            btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
          }
          }>
          ru
            </button>
        <span>/</span>
        <button
          id='eng'
          className={styles.langBtn}
          onClick={(e) => {
            const btn = e.currentTarget;
            const ru = document.getElementById('ru');
            ru?.classList.contains(styles.active) ? ru?.classList.remove(styles.active) : '';
            btn.classList.contains(styles.active) ? '' : btn.classList.add(styles.active);
          }}>
          eng
          </button>
      </div>
    </div>
  );
}
