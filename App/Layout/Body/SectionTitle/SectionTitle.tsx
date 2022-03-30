import React from 'react';
import styles from './sectiontitle.css';

export function SectionTitle() {
  return (
    <section className={styles.container}>
      <svg width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="1502" height="688" stroke="url(#paint0_linear_20_399)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F1F6B" stopOpacity="0.35" />
            <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.imageAnimContainer} >
        <svg width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.imageAnim} x="1" y="1" width="1502" height="688" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 500%" strokeDashoffset="0%" />
          <defs>
            <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F1F6B" stopOpacity="0.35" />
              <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.mainContentContainer} >
          <h1 className={styles.title} >Разрабатываем профессиональные <br /> IT - решения для вашего бизнеса:</h1>
          <p className={styles.title}>
            <span> &lt;/ </span>
            <span></span>
            <span>&gt;</span>
          </p>
        </div>
      </div>

    </section>
  );
}
