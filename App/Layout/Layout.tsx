import React from 'react';
import { Portfolio } from './Body/Portfolio';
import { SectionTitle } from './Body/SectionTitle/SectionTitle';
import { WeUse } from './Body/WeUse';
import { WhatWeDo } from './Body/WhatWeDo';
import { Header } from './Header';
import styles from './layout.css';

export function Layout() {
  return (
    <>
      <Header />
      <SectionTitle />
      <WhatWeDo />
      {/* <Portfolio /> */}
      <WeUse />
    </>
  );
}
