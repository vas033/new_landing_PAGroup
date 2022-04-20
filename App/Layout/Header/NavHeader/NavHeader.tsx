import React, { useEffect, useState } from 'react';
import styles from './navheader.css';
import burger from './burger.css';
import navList from '../../arrays/navHeader';
import { scrollTo } from '../../../src/hooks/navScrollTo';
import getCoords from '../../../src/hooks/getCoords';

export function NavHeader() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {navList.map(el =>
          <button
            id={el.id}
            className={styles.navLink}
            key={navList.indexOf(el)}
            onClick={() => {
              document.getElementById(el.link)?.scrollIntoView({behavior: 'smooth'})
            }} >
            {el.name}
          </button>
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
