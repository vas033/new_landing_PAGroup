import React from 'react';
import whatWeDoArr from '../../arrays/whatWeDoArr';
import styles from './whatwedo.css';
import { WhatWeDoItem } from './WhatWeDoItem';



export function WhatWeDo() {

  return (
    <section id='sectionWhatWeDo' className={styles.section}>
      <div className={styles.line1}>
        <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M3.53138e-08 2C-0.552285 2 -1 1.55228 -1 1C-1 0.447715 -0.552285 2.98818e-08 -3.53138e-08 0L3.53138e-08 2ZM505.419 0.999973L505.419 -2.73461e-05L505.733 -2.73631e-05L505.99 0.178906L505.419 0.999973ZM1011.72 353L1011.72 354L1011.41 354L1011.15 353.821L1011.72 353ZM1919 352L1920 352L1920 354L1919 354L1919 352ZM-3.53138e-08 0L505.419 -2.73461e-05L505.419 1.99997L3.53138e-08 2L-3.53138e-08 0ZM505.99 0.178906L1012.29 352.179L1011.15 353.821L504.848 1.82104L505.99 0.178906ZM1011.72 352L1919 352L1919 354L1011.72 354L1011.72 352Z" fill="#3D67FF" fillOpacity="0.3" />
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
          <path opacity="0.3" d="M1919 2C1919.55 2 1920 1.55228 1920 1C1920 0.447715 1919.55 2.59186e-08 1919 0L1919 2ZM1413.58 0.999976L1413.58 -2.37192e-05L1413.27 -2.37339e-05L1413.01 0.17967L1413.58 0.999976ZM907.276 354L907.276 355L907.59 355L907.848 354.82L907.276 354ZM-0.000380542 353L-1.00038 353L-1.00038 355L-0.000380624 355L-0.000380542 353ZM1919 0L1413.58 -2.37192e-05L1413.58 1.99998L1919 2L1919 0ZM1413.01 0.17967L906.704 353.18L907.848 354.82L1414.15 1.82028L1413.01 0.17967ZM907.276 353L-0.000380542 353L-0.000380624 355L907.276 355L907.276 353Z" fill="#3D67FF" fillOpacity="0.3" />
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
            key={whatWeDoArr.indexOf(el)}
            linkImg={el.linkImg}
            title={el.title}
            desc={el.desc}
            linkMore={el.linkMore}
            backColor={el.backColor}
            svgColor={el.svgColors}
          />)}
        </div>
      </div>
    </section>
  );
}
