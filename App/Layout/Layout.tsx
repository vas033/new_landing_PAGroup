import React from 'react';
import { SectionTitle } from './Body/SectionTitle/SectionTitle';
import { WhatWeDo } from './Body/WhatWeDo';
import { Header } from './Header';
import styles from './layout.css';

export function Layout() {
  return (
    <>
      <Header />
      {/* <SectionTitle /> */}
      <WhatWeDo />
    </>
  );
}
