import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import styles from './whatwedoitem.css';

interface IMyWhatWeDoItem {
  linkImg: string,
  title: string,
  desc: string,
  linkMore: string,
  backColor: string,
  svgColor: string
}

export function WhatWeDoItem({ linkImg, title, desc, linkMore, backColor, svgColor }: IMyWhatWeDoItem) {
  const [isOnHover, setIsOnHover] = useState(false);

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
    <a href={linkMore}
      target='_blank'
      className={styles.container}
    >
      <Player
        src={linkImg}
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          padding: '33px 40px'
        }}
        className={colors}
        loop
        hover
      />
      <div className={styles.about}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <span className={styles.linkMore}>Подробнее</span>
      </div>
    </a>
  );
}
