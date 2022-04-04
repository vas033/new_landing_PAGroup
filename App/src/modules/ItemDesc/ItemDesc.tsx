import React from 'react';
import styles from './itemdesc.css';

interface IMyItem {
  title: string,
  desc: string,
  cl?: string,
  clTitle?: string,
  clDesc?: string
}
export function ItemDesc({title, desc, cl, clTitle, clDesc}:IMyItem) {
  let classContainer = cl ? styles.container + ' ' + cl : styles.container ;
  let classTitle = clTitle ? styles.title + ' ' + clTitle : styles.title ;
  let classDesc = clDesc ? styles.desc + ' ' + clDesc : styles.desc ;

  return (
    <div className={classContainer} >
      <h2 className={classTitle}>{title}</h2>
      <p className={classDesc}>{desc}</p>
    </div>
  );
}
