import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

interface IMyCoords {
  coordsLayout?: {[key:string]: number}
}

export function Header({coordsLayout}: IMyCoords) {
  return (
    <header className={styles.container} >
      <Logo />
      <NavHeader />
    </header>
  );
}
