import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import styles from './component.css';
import autosnab from '../App/src/img/autosnab.png';
import phone from '../App/src/img/phone.png';

export function Component() {

  // сделать две картинки высотой 0.
  // сделать контейнер с элементами(!!!) наподобии textArea
  // брать позицию скролла и передавать в координаты и значения высоты картинки
  // через data-attr привязать конкретную картинку к конкретному блоку (скролл)

  const animation = styles.animation;
  return (
    <div>
      <Controller globalSceneOptions={{triggerHook: 0}} >
        <div>
        <Scene pin={true} >
          <div id='a' className={styles.worksContainer} >
            <svg xmlns="http://www.w3.org/2000/svg" width="643" height="643" viewBox="0 0 643 643" preserveAspectRatio="none">
              <defs>
                <pattern xmlns="http://www.w3.org/2000/svg" id="img1" patternUnits="userSpaceOnUse" width="643" height="643">
                  <image href={autosnab} x="0" y="0" width="643" height="643" />
                </pattern>
              </defs>

              <path fill="url(#img1)" d="M0.00,643 V0 H643 V643Z">
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  values=" 
                  M0.00,643 C149.99,643 271.49,550 643,643 L643,0.00 L0.00,0.00 Z;
	                M0.00,590 C157.16,550 281.88,643 643,610 L643,0.00 L0.00,0.00 Z;
                  M0.00,643 C149.99,643 271.49,550 643,643 L643,0.00 L0.00,0.00 Z"
                />
              </path>
            </svg>
          </div>



        </Scene>
        {/* <div className={styles.worksContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="643" height="643" viewBox="0 0 643 643" preserveAspectRatio="none">
                  <defs>
                    <pattern xmlns="http://www.w3.org/2000/svg" id="img1" patternUnits="userSpaceOnUse" width="643" height="643">
                      <image href={autosnab} x="0" y="0" width="643" height="643" />
                    </pattern>
                  </defs>

                  <path fill="url(#img1)" d="M0.00,643 V0 H643 V643Z">
                    <animate
                      attributeName="d"
                      dur="7s"
                      repeatCount="indefinite"
                      values=" 
                  M0.00,643 C149.99,643 271.49,550 643,643 L643,0.00 L0.00,0.00 Z;
	                M0.00,590 C157.16,550 281.88,643 643,610 L643,0.00 L0.00,0.00 Z;
                  M0.00,643 C149.99,643 271.49,550 643,643 L643,0.00 L0.00,0.00 Z"
                    />
                  </path>
                </svg>
              </div> */}

        <Scene pin={true} duration={70} indicators={true}>
          {(progress: any, event: { type: string; scrollDirection: string; }) => {

            console.log(progress)

            return (
              <div id='b' className={styles.worksContainer}>
                <svg xmlns="http://www.w3.org/2000/svg" width="643" height="643" viewBox="0 0 643 643" preserveAspectRatio="none">
                  <defs>
                    <pattern xmlns="http://www.w3.org/2000/svg" id="img2" patternUnits="userSpaceOnUse" width="643" height="643">
                      <image href={phone} x="0" y="0" width="643" height="643" />
                    </pattern>
                  </defs>

                  <path fill="url(#img2)" d="M0.00,643 V0 H643 V643Z">
                    <animate
                      attributeName="d"
                      dur="7s"
                      repeatCount="indefinite"
                      values=" 
      M0.00,0 C149.99,0 271.49,50 643,0 V643H0V0 Z;
      M0.00,0 C157.16,50 281.88,0 643,20 V643H0V0 Z;
      M0.00,0 C149.99,0 271.49,50 643,0 V643H0V0 Z"
                    />
                  </path>
                </svg>
              </div>

            );
          }}
        </Scene>
        </div>
        {/* <Scene pin={true}> 
          <div className={styles.worksContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" width="643" height="643" viewBox="0 0 643 643" preserveAspectRatio="none">
              <defs>
                <pattern xmlns="http://www.w3.org/2000/svg" id="img1" patternUnits="userSpaceOnUse" width="643" height="643">
                  <image href={autosnab} x="0" y="0" width="643" height="643" />
                </pattern>
              </defs>

              <path fill="url(#img1)" d="M0.00,643 C149.99,643.00 271.49,420 500.00,643 L500.00,0.00 L0.00,0.00 Z">
                <animate
                  attributeName="d"
                  dur="7s"
                  repeatCount="indefinite"
                  values=" 
                  M0.00,643 C149.99,643 271.49,550 500.00,643 L500.00,0.00 L0.00,0.00 Z;
	                M0.00,590 C157.16,550 281.88,643 500.00,610 L500.00,0.00 L0.00,0.00 Z;
                  M0.00,643 C149.99,643 271.49,550 500.00,643 L500.00,0.00 L0.00,0.00 Z"
                />
              </path>
            </svg>
          </div>
        </Scene> */}
      </Controller>
    </div>
  );
}
