import React, { useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
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
    console.log(header)
    header.forEach(el => el.classList.remove(navStyle.active))
  }

  function activeNav(str: string) {
    removeActive();
    const id = 'nav' + str;
    const currentNav = document.getElementById(id);

    currentNav?.classList.add(navStyle.active)
  }

  let objCoords: { [key: string]: number } = {};
  const [coords, setCoords] = useState({});
  
  useEffect(() => {
    navList.map(el => {
      const elem = document.getElementById(el.link);
      if (elem) {
        objCoords[el.link] = getCoords(elem).top;
      }
    })
    setCoords(objCoords)
  }, []);

  return (
    <>
      <Controller globalSceneOptions={{ triggerHook: 'onLeave' }}>
        <Header coordsLayout={coords}/>
        <Scene pin classToggle={'active'} >
          {
            (progress: any, event: any) => {
              return (
                <div id='title'>
                  <SectionTitle />
                </div>
              )
            }
          }
        </Scene>
        <Scene pin={true}>
          {
            (progress: any, event: any) => {
              if (progress === 1) {
                activeNav('WhatWeDo');
              }

              if (event.scrollDirection == 'REVERSE') {
                activeNav('title');
              }

              return (
                <div id='WhatWeDo'>
                  <WhatWeDo />
                </div>
              )
            }
          }
        </Scene>
        {/* <Scene pin>
        <Portfolio />
      </Scene> */}
        <Scene pin={true}>
          {
            (progress: any, event: any) => {
              if (progress === 1) {
                activeNav('WeUse');
              }

              if (event.scrollDirection == 'REVERSE') {
                activeNav('WhatWeDo');
              }

              return (
                <div id='WeUse'>
                  <WeUse />
                </div>
              )
            }
          }
        </Scene>
        <Scene pin={true}>
          {
            (progress: any, event: any) => {
              if (progress === 1) {
                activeNav('Benefits');
              }

              if (event.scrollDirection == 'REVERSE') {
                activeNav('WeUse');
              }

              return (
                <div id='Benefits'>
                  <OurBenefits />
                </div>
              )
            }
          }
        </Scene>
        <Scene pin={true}>
          {
            (progress: any, event: any) => {
              if (progress === 1) {
                activeNav('Footer');
              }

              if (event.scrollDirection == 'REVERSE') {
                activeNav('Benefits');
              }

              return (
                <div id='Footer' style={{ height: '100vh' }}>
                  <Footer coordsLayout={coords} />
                </div>
              )
            }
          }
        </Scene>
      </Controller>
    </>
  );
}
