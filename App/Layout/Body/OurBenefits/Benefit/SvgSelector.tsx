import React from 'react';
import styles from './benefit.css';
interface Props {
  id: string,

}

export const SvgSelector = ({ id }: Props) => {
  switch (id) {
    case 'red':
      return (
        <svg width="352" height="384" viewBox="0 0 352 384" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_420_110" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="384">
            <path d="M19.4247 126.345V384H324.923L352 358.621V0H19.4247L0 18.2069V108.138L19.4247 126.345Z" fill="#E2398E" />
          </mask>
          <g mask="url(#mask0_420_110)">
            <g filter="url(#filter0_b_420_110)">
              <rect width="352" height="384" fill="white" fillOpacity=".1" />
            </g>
            <g>
              <path d="M4 67L22 83" stroke="#FF3C3C" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 67L22 83" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
              <path d="M4 52L22 68" stroke="#FF3C3C" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 52L22 68" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
              <path d="M4 37L22 53" stroke="#FF3C3C" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 37L22 53" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
            </g>
            <g filter="url(#filter1_d_420_110)">
              <path d="M0 107.034L10.5953 116.414L21.1906 126.414V141.241V155.586" stroke="#FF3C3C" strokeWidth="2" />
              <path className={styles.strokeBig} d="M0 107.034L10.5953 116.414L21.1906 126.414V141.241V155.586" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
            </g>
            <g filter="url(#filter2_d_420_110)">
              <path className={styles.lineRed} d="M324 382.222L350 359.444V262.222" stroke="#FF3C3C" strokeWidth="2" />
            </g>
          </g>
          <defs>
            <filter id="shadow">
              <feDropShadow dx="0" dy="0" stdDeviation="2" />
            </filter>
            <filter id="filter0_b_420_110" x="-80" y="-80" width="512" height="544" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="40" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_420_110" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_420_110" result="shape" />
            </filter>
            <filter id="filter1_d_420_110" x="-6.66284" y="100.286" width="34.8535" height="61.3005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_420_110" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_420_110" result="shape" />
            </filter>
            <filter id="filter2_d_420_110" x="317.341" y="256.222" width="39.6589" height="132.752" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_420_110" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_420_110" result="shape" />
            </filter>
          </defs>
        </svg>

      )

    case 'green':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="352" height="384" viewBox="0 0 352 384" fill="none">
          <mask id="mask0_3_18" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="384">
            <path d="M19.4247 126.345V384H324.923L352 358.621V0H19.4247L0 18.2069V108.138L19.4247 126.345Z" fill="#E2398E" />
          </mask>
          <g mask="url(#mask0_3_18)">
            <g filter="url(#filter0_b_420_143)">
              <rect width="352" height="384" fill="white" fillOpacity=".1" />
            </g>
            <g filter="url(#filter0_d_3_18)">
              <path d="M1 106.035L11.5953 115.414L22.1906 125.414V140.241V154.586" stroke="#30BFAB" strokeWidth="2" />
              <path className={styles.strokeBig} d="M1 106.035L11.5953 115.414L22.1906 125.414V140.241V154.586" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
            </g>
            <g filter="url(#filter1_d_3_18)">
              <path className={styles.lineGreen} d="M324 381.222L350 358.444V261.222" stroke="#30BFAB" strokeWidth="2" />
            </g>
            <g>
              <path d="M4 66L22 84" stroke="#30BFAB" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 66L22 84" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="9%" />
              <path d="M4 51L22 69" stroke="#30BFAB" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 51L22 69" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="9%" />
              <path d="M4 36L22 54" stroke="#30BFAB" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 36L22 54" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="9%" />
            </g>
          </g>
          <defs>
            <filter id="filter0_b_420_143" x="-80" y="-80" width="512" height="544" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="40" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_420_143" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_420_143" result="shape" />
            </filter>
            <filter id="filter0_d_3_18" x="-5.66283" y="99.2857" width="34.8535" height="61.3005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_18" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_18" result="shape" />
            </filter>
            <filter id="filter1_d_3_18" x="317.341" y="255.222" width="39.659" height="132.752" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_18" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_18" result="shape" />
            </filter>
          </defs>
        </svg>


      )

    case 'pink':
      return (
        <svg className={styles.svgPink} width="352" height="384" viewBox="0 0 352 384" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_420_175" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="384">
            <path d="M19.4247 126.345V384H324.923L352 358.621V0H19.4247L0 18.2069V108.138L19.4247 126.345Z" fill="#E2398E" />
          </mask>
          <g mask="url(#mask0_420_175)">
            <g filter="url(#filter0_b_420_175)">
              <rect width="352" height="384" fill="white" fillOpacity=".1" />
            </g>
            <g>
              <path d="M4 67L22 83" stroke="#EC68A9" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 67L22 83" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
              <path d="M4 52L22 68" stroke="#EC68A9" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 52L22 68" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
              <path d="M4 37L22 53" stroke="#EC68A9" strokeWidth="2" />
              <path className={styles.strokeSmall} d="M4 37L22 53" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
            </g>
            <g filter="url(#filter1_d_420_175)">
              <path d="M0 107.034L10.5953 116.414L21.1906 126.414V141.241V155.586" stroke="#EC68A9" strokeWidth="2" />
              <path className={styles.strokeBig} d="M0 107.034L10.5953 116.414L21.1906 126.414V141.241V155.586" stroke="#fff" filter="url(#shadow)" strokeWidth="2" strokeDasharray="56 112" strokeDashoffset="0%" />
            </g>
            <g filter="url(#filter2_d_420_175)">
              <path className={styles.linePink} d="M324 381.222L350 358.444V261.222" stroke="#EC68A9" strokeWidth="2" />
            </g>
          </g>
          <defs>
            <filter id="filter0_b_420_175" x="-80" y="-80" width="512" height="544" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="40" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_420_175" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_420_175" result="shape" />
            </filter>
            <filter id="filter1_d_420_175" x="-6.66284" y="100.286" width="34.8535" height="61.3005" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_420_175" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_420_175" result="shape" />
            </filter>
            <filter id="filter2_d_420_175" x="317.341" y="256.222" width="39.6589" height="132.752" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.92549 0 0 0 0 0.407843 0 0 0 0 0.662745 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_420_175" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_420_175" result="shape" />
            </filter>
          </defs>
        </svg>
      )

    default:
      return <svg></svg>
  }
}
