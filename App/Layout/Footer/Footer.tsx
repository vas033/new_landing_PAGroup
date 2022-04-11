import React from 'react';
import navFooter from '../arrays/navFooter';
import styles from './footer.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line1}>
        <svg width="695" height="1132" viewBox="0 0 695 1132" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M694 1131V613.551L566.062 469.774V1.00003H404.806H202.903V63.1538H1.00002" stroke="#3D67FF" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" />
        </svg>

        <div className={styles.line1anim}>
          <svg width="695" height="1132" viewBox="0 0 695 1132" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M694 1131V613.551L566.062 469.774V1.00003H404.806H202.903V63.1538H1.00002" stroke="#3D67FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="26 500%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div className={styles.line2}>
        <svg width="1920" height="316" viewBox="0 0 1920 316" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M1 314C0.447715 314 2.24856e-08 314.448 0 315C-2.24856e-08 315.552 0.447715 316 1 316L1 314ZM506.419 315L506.419 316L506.704 316L506.946 315.85L506.419 315ZM1012.72 0.999956L1012.72 -4.40728e-05L1012.44 -4.40862e-05L1012.2 0.150133L1012.72 0.999956ZM1920 2L1921 2L1921 -1.44762e-06L1920 -1.49455e-06L1920 2ZM1 316L506.419 316L506.419 314L1 314L1 316ZM506.946 315.85L1013.25 1.84981L1012.2 0.150133L505.892 314.15L506.946 315.85ZM1012.72 1.99996L1920 2L1920 -1.49455e-06L1012.72 -4.40728e-05L1012.72 1.99996Z" fill="#3D67FF" fillOpacity="0.3" />
        </svg>

        <div className={styles.line2anim}>
          <svg width="1920" height="316" viewBox="0 0 1920 316" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 314H506L1012 2H1920" stroke="#3D67FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div className={styles.line3}>
        <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M1920 352C1920.55 352 1921 352.448 1921 353C1921 353.552 1920.55 354 1920 354L1920 352ZM1414.58 353L1414.58 354L1414.27 354L1414.01 353.821L1414.58 353ZM908.276 0.999994L908.276 -6.29499e-06L908.59 -6.31195e-06L908.847 0.178918L908.276 0.999994ZM0.999866 2.00001L-0.000134465 2.00001L-0.000134536 1.23305e-05L0.999865 1.22764e-05L0.999866 2.00001ZM1920 354L1414.58 354L1414.58 352L1920 352L1920 354ZM1414.01 353.821L907.705 1.82104L908.847 0.178918L1415.15 352.179L1414.01 353.821ZM908.276 1.99999L0.999866 2.00001L0.999865 1.22764e-05L908.276 -6.29499e-06L908.276 1.99999Z" fill="#3D67FF" fillOpacity="0.3" />
        </svg>


        <div className={styles.line3anim}>
          <svg width="1920" height="354" viewBox="0 0 1920 354" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1920 352H1414L908 2H0" stroke="#3D67FF" strokeWidth="3" strokeLinecap="round" strokeDasharray="26 150%" strokeDashoffset="0%" />
          </svg>
        </div>
      </div>

      <div id='footerContent' className={styles.container}>
        <h2 className={styles.title}>Начнем работу?</h2>
        <div className={styles.hiddenLinkContainer}>
          <a className={styles.hiddenLink} target='_blank' href="https://t.me/antipoff_group">Написать в Telegram</a>
          <div className={styles.hiddenLinkBorder}></div>
        </div>
        <div className={styles.infoNav}>
          <div className={styles.infoContainer}>
            <div className={styles.linkContainer}>
              <a className={styles.mail} target='_blank' href="mailto:designer.pagroup@gmail.com">designer.pagroup@gmail.com</a>
              <div className={styles.hiddenLinkBorder}></div>
            </div>
            <div className={styles.firmTaxInfo}>
              <p className={styles.firmInfo}>ИП Антипов ПН</p>
              <p className={styles.firmInfo}>ИНН 550516521644</p>
            </div>
          </div>
          <nav className={styles.nav}>
            {navFooter.map((el) =>
              <a className={styles.navLinks} key={navFooter.indexOf(el)} onClick={() => {}}>{el.name}</a>
            )}
          </nav>
        </div>
        <p className={styles.lisence}>Любое использование материалов сайта без разрешения запрещено</p>
      </div>

    </footer>
  );
}
