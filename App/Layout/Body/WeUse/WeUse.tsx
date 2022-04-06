import React from 'react';
import weUseArr from '../../arrays/weUseArr';
import styles from './weuse.css';
import { WeUseItem } from './WeUseItem';

export function WeUse() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        Используем лучшие <span>технологии</span> <br />
        для решения ваших задач
      </h2>
      {weUseArr.map((el) => <WeUseItem title={el.title} text={el.text} key={weUseArr.indexOf(el)} />)}
    </section>
  );
}
