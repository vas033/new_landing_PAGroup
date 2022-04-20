import React, { useEffect, useState } from 'react';
import { OurBenefits } from './Body/OurBenefits';
import { Portfolio } from './Body/Portfolio';
import { SectionTitle } from './Body/SectionTitle/SectionTitle';
import { WeUse } from './Body/WeUse';
import { WhatWeDo } from './Body/WhatWeDo';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './layout.css';
import navStyle from './Header/NavHeader/navheader.css';
import getCoords from '../src/hooks/getCoords';
import navList from './arrays/navHeader';

export function Layout() {
  function removeActive() {
    const header = document.querySelectorAll(`header nav .${navStyle.active}`);
    header.forEach(el => el.classList.remove(navStyle.active))
  }

  function activeNav(str: string) {
    removeActive();
    const id = 'nav' + str;
    const currentNav = document.getElementById(id);

    currentNav?.classList.add(navStyle.active)
  }

  function currentTab(arr: number[], links: string[], scrollPos: number) {
    arr.forEach((el, i) => {
      if (scrollPos === el) {
        activeNav(links[i])
      }
    })
  }

  let arrCoords: number[] = [];
  let arrLinks: string[] = [];
  const [coords, setCoords] = useState(arrCoords);
  const [links, setLinks] = useState(arrLinks);

  useEffect(() => {
    navList.map(el => {
      const elem = document.getElementById(el.link);
      if (elem) {
        arrLinks.push(el.link);
        arrCoords.push(getCoords(elem).top)
      }
    })
    setCoords(arrCoords);
    setLinks(arrLinks);
  }, []);

  return (
    <div className={styles.container} onScroll={(e) => {
      currentTab(coords, links, e.currentTarget.scrollTop)
    }}>
      <Header />
      <SectionTitle />
      <WhatWeDo />
      <Portfolio />
      <WeUse />
      <OurBenefits />
      <Footer />
    </div>
  );
}
