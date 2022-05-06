import React, { useEffect, useState } from 'react';
import styles from './portfolio.css';
import autosnab from '../../../src/img/autosnab.png';
import phone from '../../../src/img/phone.png';
import climatec from '../../../src/img/climatec.png';
import { SvgAnimScroll } from './SvgAnimScroll';
import { Card } from './Card';
import getCoords from '../../../src/hooks/getCoords';

function triggeredCard(triggerTop: number, triggerBottom: number, cardId: string) {
  const elem = document.getElementById(cardId);

  if (elem) {
    const top = getCoords(elem).top;

    if (triggerBottom >= top && top >= triggerTop) {
      elem.classList.add(styles.active)
    } else {
      elem.classList.remove(styles.active)
    }
  }
}

interface IMyPortfolio {
  width: number
}

export function Portfolio({ width }: IMyPortfolio) {
  const [height, setHeight] = useState(0);
  const triggerBottom = width < 1440 ? 312 : 632;
  const triggerTop = width < 1440 ? 12 : 233;
  triggeredCard(triggerTop, triggerBottom, 'volonteer');
  triggeredCard(triggerTop, triggerBottom, 'autosnab');
  triggeredCard(triggerTop, triggerBottom, 'climatec');

  return (
    <section id='Portfolio' data-target='2'>
      <div className={styles.container}>
        <div id='list' className={styles.worksContainer}
          onScroll={(e) => {
            let pos = e.currentTarget.scrollTop;

            const stepSlide = 432;
            let imgStep = 843;

            let step = imgStep / stepSlide;

            setHeight(pos * step);
          }}
        >
          <div style={width < 1439 ? { display: 'none' } : { height: '222px' }}></div>
          <Card
            id='volonteer'
            tags={['UX/UI', 'Mobile', 'Web']}
            title='ЯВолонтер'
            desc='Web & mobile сервис для связи волонтеров, волонтерских организаций и всех, кому нужна их помощь'
          />
          <Card
            id='autosnab'
            tags={['UX/UI', 'Mobile', 'Web']}
            title='Автоснаб'
            desc='Web сервис и моб приложение – комплексное решение для автоматизации процессов закупки товаров'
          />
          <Card
            id='climatec'
            tags={['UX/UI', 'Mobile', 'Web']}
            title='Climatec'
            desc='Приложение для полноценного и комфортного управления умным домом от компании SCS Climatec'
          />
          <div style={width < 1439 ? { display: 'none' } : { height: '260px' }}></div>
        </div>
        <a href="#" className={styles.hiddenLink}>
          <div id='imgContainer' className={styles.imgContainer}>
            <img className={styles.image} src={phone} alt={'smth'} />

            <div id='img1' className={styles.image}>
              <SvgAnimScroll width={width} href={autosnab} height={height} imgId='imgOne' />
            </div>

            <div id='img2' className={styles.image}>
              <SvgAnimScroll width={width} href={climatec} height={width < 1440 ? height - 450 : height - 838} imgId='imgTwo' />
            </div>
          </div>
          {width >= 1440 ? <span className={styles.link}>Смотреть все работы</span> : ''}
        </a>
        {width < 1440 ? <a href="#" className={styles.link} >Смотреть все работы</a> : ''}
      </div>
    </section>
  );
}
