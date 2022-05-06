import React from 'react';
import weUseArr from '../../arrays/weUseArr';
import styles from './weuse.css';
import { WeUseItem } from './WeUseItem';

interface IMyWeUse {
  width: number
}

export function WeUse({width}: IMyWeUse) {
  return (
    <section id='WeUse' data-target='3'>
      <div className={styles.container} >
        <h2 className={styles.title}>
          Используем лучшие <span>технологии</span> <br />
        для решения ваших задач
      </h2>
        <div className={styles.listContainer}>
          {weUseArr.map((el) => <WeUseItem width={width} title={el.title} text={el.text} key={weUseArr.indexOf(el)} />)}
        </div>
      </div>
    </section>
  );
}
