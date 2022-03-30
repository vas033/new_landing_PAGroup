import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

export function Header() {
  return (
    <header className={styles.container} >
      <Logo />
      <NavHeader />
    </header>
  );
}
