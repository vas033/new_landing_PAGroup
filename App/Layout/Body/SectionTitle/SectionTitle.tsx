import React, { useState } from 'react';
import codeText from '../../arrays/codeText';
import styles from './sectiontitle.css';

export function SectionTitle() {

  let time: ReturnType<typeof setTimeout>;

  const [str, setStr] = useState('');
  const [strRemove, setStrRemove] = useState('');
  const [strShowed, setStrShowed] = useState('');
  const [index, setIndex] = useState(0);

  async function inputText(text: string, str: string, constName: any, ms: number) {
    let textArr = text.split('');
    let currentStr = '';

    if (str === text && index <= text.length) {
      clearTimeout(constName);
    } else {
      constName = setTimeout(() => {
        currentStr = str + textArr[index];
        setStr(currentStr);
        setIndex(index + 1)
        setStrShowed(currentStr);
        if (currentStr === text ) setStrRemove(currentStr);
      }, ms);
    }
  };

  async function removeText( strRemove: string, constName: any, ms: number) {
    let textArr: any;
    let currentStr = '';

    if (strRemove === '' && index === 0) {
      clearTimeout(constName);
    } else {
      constName = setTimeout(() => {
          textArr = strRemove.split('');
          textArr.length = index;
          currentStr = textArr.join('');
          index > 0 ? setIndex(index - 1) : setIndex(0) ;
          setStrRemove(currentStr);
          setStrShowed(currentStr);
          if (currentStr === '') setStr(currentStr);
      }, ms);
    }
  };

  const animText = (inputStr: string, removeStr:string, text: string) => {
    if (inputStr !== text) {
      inputText(text, inputStr, time, 500)
    } else {
      removeText(removeStr, time, 500)
    }
  }

  // for (let el of codeText) {

    animText(str, strRemove, 'Vasilii')
  // }

  return (
    <section className={styles.container}>
      <svg width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="1502" height="688" stroke="url(#paint0_linear_20_399)" strokeWidth="2" />
        <defs>
          <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1F1F6B" stopOpacity="0.35" />
            <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
          </linearGradient>
        </defs>
      </svg>

      <div className={styles.imageAnimContainer} >
        <svg width="1504" height="690" viewBox="0 0 1504 690" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.imageAnim} x="1" y="1" width="1502" height="688" stroke="#3D67FF" strokeWidth="3" strokeDasharray="26 500%" strokeDashoffset="0%" />
          <defs>
            <linearGradient id="paint0_linear_20_399" x1="64" y1="-24.4488" x2="1265.92" y2="796.938" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F1F6B" stopOpacity="0.35" />
              <stop offset="1" stopColor="#1F1F6B" stopOpacity="0.58" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.mainContentContainer} >
          <h1 className={styles.title} >Разрабатываем профессиональные <br /> IT - решения для вашего бизнеса:</h1>
          <p className={styles.title}>
            <span className={styles.codeAround} > &lt;/</span>
            <span className={styles.code}>{strShowed}</span>
            <span className={styles.codeAround}>&gt;</span>
          </p>
        </div>
      </div>

    </section>
  );
}
