import React from 'react';
import partners from '../../../arrays/partners';
import styles from './partnercarousel.css';

export function PartnerCarousel() {
  return (
    <div className={styles.maindiv}>
      <div id='firstImgDiv' className={styles.div1}>
        {partners.map((item) => <img className={styles.image} src={item.link} alt={item.name} key={item.name} />)}
      </div>
      <div id='secondImgDiv' className={styles.div2}>
        {partners.map((item) => <img className={styles.image} src={item.link} alt={item.name} key={item.name} />)}
      </div>
    </div>
  );
}
