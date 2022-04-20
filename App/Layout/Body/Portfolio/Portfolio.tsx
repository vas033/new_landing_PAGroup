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

export function Portfolio() {
  const [height, setHeight] = useState(0);
  const triggerBottom = 632;
  const triggerTop = 233;
  triggeredCard(triggerTop, triggerBottom, 'volonteer');
  triggeredCard(triggerTop, triggerBottom, 'autosnab');
  triggeredCard(triggerTop, triggerBottom, 'climatec');


  // useEffect(() => {
  // const div = document.getElementById('list');
  // const img1 = document.getElementById('img1');
  // const img2 = document.getElementById('img2');
  // const imgContainer = document.getElementById('imgContainer');



  // if (div && img1 && img2 && imgContainer) {

  //   const triggerBottom = 632;
  //   const triggerTop = 233;
  //   const stepSlide = 432;
  //   let imgStep = img1.offsetHeight + 100;
  //   let step = imgStep / stepSlide;
  //   triggeredCard(triggerTop, triggerBottom, 'volonteer');
  //   triggeredCard(triggerTop, triggerBottom, 'autosnab');
  //   triggeredCard(triggerTop, triggerBottom, 'climatec')

  //   div.addEventListener('scroll', () => {
  //     let pos = div.scrollTop;
  //     console.log(pos)
  //     setHeight(pos * step);
  //   })
  // }
  // }, [height])




  return (
    <section id='Portfolio' data-target='2'>
      <div className={styles.container}>
        <div id='list' className={styles.worksContainer}
          onScroll={(e) => {
            let pos = e.currentTarget.scrollTop;
            
            const stepSlide = 432;
            let imgStep = 743;

            let step = imgStep / stepSlide;
           
            setHeight(pos * step);
          }}
        >
          <div style={{ height: '222px' }}></div>
          <Card
            id='volonteer'
            tags={['UX/UI', 'Mobile', 'Blockchain']}
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
          <div style={{ height: '260px' }}></div>
        </div>
        <a href="#" className={styles.hiddenLink}>
          <div id='imgContainer' className={styles.imgContainer}>
            <img className={styles.image} src={phone} alt={'smth'} />

            <div id='img1' className={styles.image}>
              <SvgAnimScroll href={autosnab} height={height} imgId='imgOne' />
            </div>

            <div id='img2' className={styles.image}>
              <SvgAnimScroll href={climatec} height={height - 738} imgId='imgTwo' />
            </div>
          </div>
          <span>Смотреть все работы</span>
        </a>
      </div>
    </section>
  );
}
