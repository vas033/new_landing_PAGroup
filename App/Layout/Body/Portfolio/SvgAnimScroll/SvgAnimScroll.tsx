import React from 'react';
import styles from './svganimscroll.css';

interface IMySvg {
  href: string,
  height: number,
  imgId: string,
}

export function SvgAnimScroll({href, height, imgId}: IMySvg) {
  function svgHeight(h?: number) {
    if (h) {
      return 643 - height + h;
    } else {
      return 643 - height;
    }
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="634" height="643" viewBox="0 0 634 643" preserveAspectRatio="none">
      <defs>
        <pattern xmlns="http://www.w3.org/2000/svg" id={imgId} patternUnits="userSpaceOnUse" width="634" height="643">
          <image href={href} x="0" y="0" width="634" height="643" />
        </pattern>
      </defs>

      <path fill={`url(#${imgId})`} d="M0,0 C150,00 271,00 634,0 L634,643  L0,643 Z">
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values={` 
                  M0,643 V${svgHeight()} C49,${svgHeight(20)} 69,${svgHeight(30)} 90,${svgHeight(30)} C149,${svgHeight(20)} 171,${svgHeight(10)} 210,${svgHeight(50)} C280,${svgHeight(90)} 450,${svgHeight(60)} 500,${svgHeight(30)}  C540,${svgHeight()} 550,${svgHeight(30)} 634,${svgHeight(90)} V643 H0 Z; 
                  M0,643 V${svgHeight()} C150,${svgHeight(20)} 170,${svgHeight(30)} 190,${svgHeight(30)} C300,${svgHeight(20)} 330,${svgHeight(10)} 400,${svgHeight(50)} C430,${svgHeight(90)} 600,${svgHeight(60)} 634,${svgHeight(30)} C634,${svgHeight(90)} 634,${svgHeight()} 634,${svgHeight()} V643 H0 Z;
                  M0,643 V${svgHeight()} C49,${svgHeight(20)} 69,${svgHeight(30)} 90,${svgHeight(30)} C149,${svgHeight(20)} 171,${svgHeight(10)} 210,${svgHeight(50)} C280,${svgHeight(90)} 450,${svgHeight(60)} 500,${svgHeight(30)}  C540,${svgHeight()} 550,${svgHeight(30)} 634,${svgHeight(90)} V643 H0 Z`}
        />
      </path>
    </svg>
  );
}
