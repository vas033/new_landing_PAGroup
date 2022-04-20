import React, { useEffect, useState } from 'react';
import styles from './ourbenefits.css';
import shadow from '../../../src/img/shadow.png';
import { Benefit } from './Benefit';
import pink from '../../../src/img/benefits/pink.svg';
import green from '../../../src/img/benefits/green.svg';
import red from '../../../src/img/benefits/red.svg';

export function OurBenefits() {

  useEffect(() => {
    const section = document.getElementById('sectionBenefits');
    const container = document.getElementById('benefitsContainer');


    if (container && section) {
      section.style.backgroundImage = `url(${shadow})`;

      container.onmousemove = (event) => {
        section.style.backgroundPositionX = `${event.offsetX - 175}px`;
        section.style.backgroundPositionY = `${event.offsetY - 175}px`;
      }
    }
  }, [])

  return (
    <section id='Benefits' className={styles.section} data-target='4'>
      <div id='benefitsContainer' className={styles.benefits}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Наши преимущества</h2>
        <div className={styles.cardsContainer}>
          <Benefit
            backImg={pink}
            title='Регулярные отчеты'
            desc='Наши клиенты видят, как развивается их проект. Мы уведомляем о каждом этапе в телеграмм чате'
          />
          <Benefit
            backImg={green}
            title='Легко общаться'
            desc='Мы общаемся честно, не используем сложных слов и всегда готовы делиться нашим опытом'
          />
          <Benefit
            backImg={red}
            title='Даем гарантии'
            desc='Мы будем с вами на протяжении 12 месяцев после сдачи проекта. Быстро исрпавим ошибки'
          />
        </div>
      </div>
    </section>
  );
}
