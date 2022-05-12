import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import codeText from '../../arrays/codeText';
import { About } from './About';
import { PartnerCarousel } from './PartnerCarousel';
import styles from './sectiontitle.css';

interface IMyTitle {
  width: number
}

export function SectionTitle({ width }: IMyTitle) {
  // let svgWidth = 1504;
  // let svgHeight = 690;
  let btnWidth = 308; //36
  let btnHeight = 104; //40

  useEffect(() => {
    const svg = document.getElementById('svgTitle');
    const svgAnim = document.getElementById('svgTitleAnim');

    if (svg && svgAnim) {
      if (width >= 1440 && width < 1920) {
        svg.style.width = '88.06vw';
        svgAnim.style.width = '88.06vw';
      }
      else if (width >= 1920) {
        svg.style.width = '78.33vw';
        svgAnim.style.width = '78.33vw';
      }
    }

    if (width > 1440 && width < 1920) {
      btnWidth = 216;
      btnHeight = 82
    } else if (width < 1920) {
      btnWidth = 292;
      btnHeight = 100;
    }
  })

  return (
    <section id='sectionTitle' className={styles.section}>
      <div className={styles.container}>
        <div>
          <svg id='svgTitle' width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="1502" height="688" stroke="url(#paint0_linear_20_399)" strokeWidth="2" />
            <defs>
              <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1F1F6B" stopOpacity="0.35" />
                <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
              </linearGradient>
            </defs>
          </svg>

          <div className={styles.imageAnimContainer} >
            <svg id='svgTitleAnim' width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className={styles.imageAnim} x="1" y="1" width="1502" height="688" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 500%" strokeDashoffset="0%" />
              <defs>
                <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1F1F6B" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
                </linearGradient>
              </defs>
            </svg>
          </div>

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
                <svg width={`${btnWidth}`} height={`${btnHeight}`} viewBox="0 0 308 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className={styles.shadow}>
                    <path d="M292 84H43L20 61.3538V42.6462V38.5V30.5V20H200L205 24.9231H274L292 42.6462V84Z" fill="#3D67FF" />
                  </g>
                  <defs>
                    <filter id="filter0_d_268_617" x="0" y="0" width={`${btnWidth + 4}`} height={`${btnHeight}`} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
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
