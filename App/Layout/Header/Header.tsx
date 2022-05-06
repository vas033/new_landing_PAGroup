import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

interface IMyCoords {
  width: number
}

export function Header({width}: IMyCoords) {
  return (
    <header className={styles.container} >
      <Logo />
      <NavHeader width={width} />
    </header>
  );
}
