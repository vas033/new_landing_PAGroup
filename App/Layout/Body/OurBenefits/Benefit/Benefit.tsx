import React from 'react';
import styles from './benefit.css';


interface IMyBenefit {
  backImg: string,
  title: string,
  desc: string
}

export function Benefit(props:IMyBenefit) {
  return (
    <div className={styles.container} style={{backgroundImage: `url(${props.backImg})`}}>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}
