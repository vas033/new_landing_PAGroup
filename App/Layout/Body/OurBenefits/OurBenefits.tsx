import React, { useEffect, useState } from 'react';
import styles from './ourbenefits.css';
import shadow from '../../../src/img/shadow.png';
import { Benefit } from './Benefit';
import pink from '../../../src/img/benefits/pink.svg';
import green from '../../../src/img/benefits/green.svg';
import red from '../../../src/img/benefits/red.svg';
import test from '../../../src/img/benefits/test.svg';


export function OurBenefits() {

  return (
    <section id='Benefits' className={styles.section}>
      <div className={styles.line1}>

        <svg xmlns="http://www.w3.org/2000/svg" width="1922" height="355" viewBox="0 0 1922 355" fill="none">
          <path d="M1921 353 H1415 L908 1 H0 " stroke="#3D67FF" strokeOpacity="0.3" />
        </svg>

        <div className={styles.line1anim}>

          <svg width="1922" height="355" viewBox="0 0 1922 355" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1921 353 H1415 L908 1 H0 " stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div className={styles.line2}>

        <svg xmlns="http://www.w3.org/2000/svg" width="696" height="1082" viewBox="0 0 696 1082" fill="none">
          <path opacity="0.3" d="M1.63892 1081V586.447L129.644 449.032V1.00002H290.984H492.992V60.4036H695" stroke="#3D67FF" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className={styles.line2anim}>
          <svg width="696" height="1082" viewBox="0 0 696 1082" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.63892 1081V586.447L129.644 449.032V1.00002H290.984H492.992V60.4036H695" stroke="#3D67FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="26 500%" strokeDashoffset="0%" fill="none"></path>
          </svg>
        </div>
      </div>

      <div className={styles.line3}>
        <svg width="1920" height="355" viewBox="0 0 1920 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M1919 2C1919.55 2 1920 1.55228 1920 1C1920 0.447715 1919.55 2.59186e-08 1919 0L1919 2ZM1413.58 0.999976L1413.58 -2.37192e-05L1413.27 -2.37339e-05L1413.01 0.17967L1413.58 0.999976ZM907.276 354L907.276 355L907.59 355L907.848 354.82L907.276 354ZM-0.000380542 353L-1.00038 353L-1.00038 355L-0.000380624 355L-0.000380542 353ZM1919 0L1413.58 -2.37192e-05L1413.58 1.99998L1919 2L1919 0ZM1413.01 0.17967L906.704 353.18L907.848 354.82L1414.15 1.82028L1413.01 0.17967ZM907.276 353L-0.000380542 353L-0.000380624 355L907.276 355L907.276 353Z" fill="#3D67FF" fillOpacity="0.3" />
        </svg>
        <div className={styles.line3anim}>
          <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1919 2H1413.27L907.276 353H0" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.cardsContainer}>
          <Benefit
            title='Регулярные отчеты'
            desc='Наши клиенты видят, как развивается их проект. Мы уведомляем о каждом этапе в телеграмм чате'
            id="pink"
          />
          <Benefit
            title='Легко общаться'
            desc='Мы общаемся честно, не используем сложных слов и всегда готовы делиться нашим опытом'
            id="green"
          />
          <Benefit
            title='Даем гарантии'
            desc='Мы будем с вами на протяжении 12 месяцев после сдачи проекта. Быстро исправим ошибки'
            id="red"
          />
        </div>
      </div>
    </section>
  );
}
