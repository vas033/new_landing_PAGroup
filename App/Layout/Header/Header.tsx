import React, { useEffect, useState } from 'react';
import styles from './header.css';
import { Logo } from './Logo';
import { NavHeader } from './NavHeader';

interface IMyCoords {
  width: number,
  lineWidth: number
}

export function Header({ width, lineWidth }: IMyCoords) {
  return (
    <header className={styles.container} >
      <svg className={styles.svg} width="1920" height="200" viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_b_1411_1181)">
          <mask id="mask0_1411_1181" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="1920" height="100">
            <path d="M0 0V68L30 100H1880L1920 58V0H0Z" fill="#E2398E" />
          </mask>
            <g className={styles.svgPath}>
              <path className={styles.progressAnim} d={`M1910 30V68L1888 90H${1858-lineWidth}`} stroke="rgba(61, 121, 255, 0.8)" strokeWidth="2"  />
              {/* <path  d={`M1910 30V68L1888 90H${1858-lineWidth}`} stroke="rgba(61, 121, 255, 0.8)" strokeWidth="2" strokeDasharray="15% 53%" strokeDashoffset="52%" /> */}
            </g>
          <g mask="url(#mask0_1411_1181)">
            <g filter="url(#filter1_b_1411_1181)">
              <rect width="1920" height="100" fill="white" fill-opacity="0.1" />
            </g>
          </g>
        </g>
        <defs>
          <filter id="filter0_b_1411_1181" x="-4" y="-4" width="1920" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1411_1181" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1411_1181" result="shape" />
          </filter>
          <filter id="filter1_b_1411_1181" x="-10" y="-10" width="1920" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1411_1181" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1411_1181" result="shape" />
          </filter>
        </defs>
      </svg>
      <Logo />
      <NavHeader width={width} />
    </header>
  );
}
