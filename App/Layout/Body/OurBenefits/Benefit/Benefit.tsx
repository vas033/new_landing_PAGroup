import React from 'react';
import { ProgressPlugin } from 'webpack';
import styles from './benefit.css';
import {SvgSelector} from './SvgSelector'


interface IMyBenefit {
  title: string,
  desc: string,
  id: string
}
export function Benefit(props: IMyBenefit) {
  return (
    <div className={styles.container} >
      <div className={styles.svg}>
      <SvgSelector id={props.id} />
      </div>
      <h3 className={styles.title}>{props.title}</h3>
      <p className={styles.desc}>{props.desc}</p>
    </div>
  );
}
