import React from 'react';
import { ItemDesc } from '../../../../src/modules/ItemDesc';
import aboutArr from '../../../arrays/about';
import styles from './about.css';

export function About() {
  return (
    <div className={styles.container}>
      {aboutArr.map((el) => 
      <ItemDesc 
      title={el.title} 
      desc={el.description} 
      key={aboutArr.indexOf(el)} 
      clTitle={styles.title}
      clDesc={styles.desc}
      />
      )}
    </div>
  );
}
