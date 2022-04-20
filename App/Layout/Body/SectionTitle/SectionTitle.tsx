import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import codeText from '../../arrays/codeText';
import { About } from './About';
import { PartnerCarousel } from './PartnerCarousel';
import styles from './sectiontitle.css';

export function SectionTitle() {
  return (
    <section id='sectionTitle' className={styles.section}>
      <div className={styles.container}>
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
            <div className={styles.title}>
              <h1 className={styles.title} >Разрабатываем профессиональные <br /> IT - решения для вашего бизнеса:</h1>
              <span className={styles.codeAround} > &lt;/</span>
              <ReactTypingEffect text={codeText} cursorClassName={styles.cursor} speed={100} typingDelay={1000} eraseSpeed={100} eraseDelay={1000} />
              <span className={styles.codeAround}>&gt;</span>
            </div>
            <About />
            <div className={styles.bottomDiv}>
              <p className={styles.desc}>Качественная разработка с высокой степенью<br />информационной безопасности и надежной инфраструктурой</p>
              <a className={styles.btn} target='_blank' href="https://pa-sales.bitrix24.site/">
                <svg width="308" height="104" viewBox="0 0 308 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className={styles.shadow}>
                    <path d="M292 84H43L20 61.3538V42.6462V38.5V30.5V20H200L205 24.9231H274L292 42.6462V84Z" fill="#3D67FF" />
                  </g>
                  <defs>
                    <filter id="filter0_d_268_617" x="0" y="0" width="312" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset />
                      <feGaussianBlur stdDeviation="10" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 0 0.879167 0 0 0 0.4 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_268_617" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_268_617" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <span>ОСТАВИТЬ ЗАЯВКУ</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <PartnerCarousel />
    </section>
  );
}
