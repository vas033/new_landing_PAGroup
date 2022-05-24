import React from 'react';
import whatWeDoArr from '../../arrays/whatWeDoArr';
import styles from './whatwedo.css';
import { WhatWeDoItem } from './WhatWeDoItem';

interface IMyWhatWeDo {
  width: number
}

export function WhatWeDo({width}:IMyWhatWeDo) {

  return (
    <section id='WhatWeDo' className={styles.section} data-target='1'>
      <div className={styles.line1}>
        <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M3.53138e-08 2H505.419L1011.72 352H1920" stroke="#3D67FF" strokeOpacity="0.3" />
        </svg>

        <div className={styles.line1anim}>

          <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.53138e-08 2H505.419L1011.72 352H1920" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div className={styles.line2}>
        <svg width="695" height="1082" viewBox="0 0 695 1082" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M1 1V495.553L128.938 632.968V1081H290.194H492.097V1021.6H694" stroke="#3D67FF" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className={styles.line2anim}>
          <svg width="695" height="1182" viewBox="0 0 695 1182" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1V495.553L128.938 632.968V1081H290.194H492.097V1021.6H694" stroke="#3D67FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="26 500%" strokeDashoffset="0%" fill="none"></path>
          </svg>
        </div>
      </div>

      <div className={styles.line3}>
        <svg width="1920" height="355" viewBox="0 0 1920 355" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M1919 2H1413.27L907.276 353H0" stroke="#3D67FF" strokeOpacity="0.3" />
        </svg>
        <div className={styles.line3anim}>
          <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1919 2H1413.27L907.276 353H0" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>
          <span>Чем мы </span>
          <span style={{ color: '#3D67FF' }}>занимаемся</span>
        </h2>
        <div className={styles.content}>
          {whatWeDoArr.map((el) => <WhatWeDoItem
            width={width}
            key={whatWeDoArr.indexOf(el)}
            linkImg={el.linkImg}
            title={el.title}
            desc={el.desc}
            linkMore={el.linkMore}
            svgColor={el.svgColors}
            secondTitle={el.secondTitle}
          />)}
        </div>
      </div>
    </section>
  );
}
