import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import styles from './whatwedoitem.css';

interface IMyWhatWeDoItem {
  linkImg: string,
  title: string,
  desc: string,
  linkMore: string,
  svgColor: string,
  width: number,
  secondTitle: string
}

export function WhatWeDoItem({ linkImg, title, desc, linkMore, width, svgColor, secondTitle }: IMyWhatWeDoItem) {

  let paddingConst = '19px 16px';
  if (width >= 1920) paddingConst = '33px 45px';
  if (width <= 767) paddingConst = 'unset'

  let colors;

  switch (svgColor) {
    case 'blockchain':
      colors = styles.img + ' ' + styles.blockchain;
      break
    case 'vision':
      colors = styles.img + ' ' + styles.vision;
      break
    case 'web':
      colors = styles.img + ' ' + styles.web;
      break
    case 'outstaff':
      colors = styles.img + ' ' + styles.outstaff;
      break
    case 'cyber':
      colors = styles.img + ' ' + styles.cyber;
      break
    case 'admin':
      colors = styles.img + ' ' + styles.admin;
      break
  }

  return (
    <div className={styles.container}>
      <Player
        src={linkImg}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          padding: paddingConst
        }}
        className={colors}
        loop
        hover
      />
      <div className={styles.about} id={linkMore}>
        <h3 className={styles.title}>{width < 768 ? secondTitle : title}</h3>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.linkMore} >Подробнее</span>
      </div>
    </div>
  );
}
