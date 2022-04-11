import React from 'react';
import styles from './portfolio.css';
import autosnab from '../../../src/img/autosnab.png';

export function Portfolio() {
  return (
    <section id='sectionPortfolio'>
      <div className={styles.container} style={{ height: '1000px' }}>
        <div className={styles.imgContainer}>
          
        </div>
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
      </div>
    </section>
  );
}
