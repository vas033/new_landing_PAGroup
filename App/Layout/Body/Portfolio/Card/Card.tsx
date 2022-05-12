import React from 'react';
import styles from './card.css';

interface IMyCard {
  id: string,
  tags: string[],
  title: string,
  desc: string
}

export function Card({id, tags, title, desc}: IMyCard) {
  return (
    <div id={id} className={styles.container}>
      <ul className={styles.tagsLine}>
        {tags.map((tag) => <li className={styles.tag} key={tags.indexOf(tag)}>{tag}</li>)}
      </ul>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>
        <span className={styles.code}>&lt;description&gt;</span>
        {desc}
        <span className={styles.code}>&lt;/description&gt;</span>
      </p>
    </div>
  );
}
