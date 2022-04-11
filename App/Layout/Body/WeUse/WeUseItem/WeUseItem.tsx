import React from 'react';
import styles from './weuseitem.css';

interface IMyUseItem {
  title: string,
  text: string
}

export function WeUseItem({ title, text }: IMyUseItem) {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer} >
        <svg className={styles.circle} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.8706 12C21.8706 17.5331 17.4123 22 11.9353 22C6.45837 22 2 17.5331 2 12C2 6.46695 6.45837 2 11.9353 2C17.4123 2 21.8706 6.46695 21.8706 12Z" fill="#0A0A22" stroke="url(#paint0_linear_268_700)" strokeWidth="4" />
          <defs>
            <linearGradient id="paint0_linear_268_700" x1="1.01577" y1="-0.850393" x2="26.5209" y2="7.10303" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F1F6B" stopOpacity="0.35" />
              <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>
        <svg className={styles.line} width="705" height="63" viewBox="0 0 705 63" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 62H126.024L174.325 1H671.31L738 62" stroke="url(#paint0_linear_268_699)" />
          <defs>
            <linearGradient id="paint0_linear_268_699" x1="31.4042" y1="-1.16142" x2="87.6306" y2="212.114" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F1F6B" />
              <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
        <div className={styles.imgContainer}>
          <svg className={styles.circleAnim} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.8706 12C21.8706 17.5331 17.4123 22 11.9353 22C6.45837 22 2 17.5331 2 12C2 6.46695 6.45837 2 11.9353 2C17.4123 2 21.8706 6.46695 21.8706 12Z" fill="none" stroke="#3D67FF" strokeWidth="4" strokeDasharray="270%" strokeDashoffset="0%">
            </path>
          </svg>
          <svg className={styles.lineAnim} width="705" height="63" viewBox="0 0 705 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 62H126.024L174.325 1H671.31L738 62" stroke="#3D67FF" strokeDasharray="26 250%" strokeDashoffset="300%" />
          </svg>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <p className={styles.desc}>
          {text}
        </p>
      </div>
    </div>
  );
}