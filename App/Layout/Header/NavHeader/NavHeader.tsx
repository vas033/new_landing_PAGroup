import React, { useEffect, useState } from 'react';
import styles from './navheader.css';
import burger from './burger.css';
import navList from '../../arrays/navHeader';
import { scrollTo } from '../../../src/hooks/navScrollTo';

interface IMyHeader {
  width: number
}

export function NavHeader({ width }: IMyHeader) {
  function onClick() {
    const btn = document.getElementById('burger');
    const menu = document.getElementById('menu');
    btn ? btn.classList.toggle(burger.open) : '';
    menu ? menu.classList.toggle(burger.showMenu) : '';
  }

  function classNames(arg1: string, arg2?: string, arg3?: string) {
    return arg1 + ' ' + arg2 + ' ' + arg3;
  }

  if (width < 1440) {
    return (
      <div className={burger.menuContainer}>
        <button className={burger.container} id='burger' onClick={() => onClick()}>
          <span className={burger.burger}>
            <span></span>
            <span></span>
          </span>
        </button>
        <div className={burger.hiddenMenu} id='menu'>
          <div className={burger.menu}>
            <nav className={styles.nav}>
              {navList.map(el =>
                <button className={styles.navLink} key={navList.indexOf(el)} onClick={() => { onClick(); document.getElementById(el.link)?.scrollIntoView({ behavior: 'smooth' }) }}>
                  <span className={styles.navSpan}>{el.name}</span>
                  <span className={classNames(styles.navSpan, styles.navBorder)}></span>
                </button>
              )}
            </nav>
            <div>
              <button
                id='ru'
                className={classNames(styles.langBtn, styles.active)}
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
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <nav className={styles.nav}>
          {navList.map(el =>
            <button
              id={el.id}
              className={styles.navLink}
              key={navList.indexOf(el)}
              onClick={() => {
                document.getElementById(el.link)?.scrollIntoView({ behavior: 'smooth' })
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
}
