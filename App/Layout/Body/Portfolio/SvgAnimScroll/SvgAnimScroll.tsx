import React from 'react';
import styles from './svganimscroll.css';

interface IMySvg {
  href: string,
  width: number,
  height: number,
  imgId: string,
}

export function SvgAnimScroll({ href, width, height, imgId }: IMySvg) {
  function svgHeight(h?: number) {
      if (h) {
        return 643 - height + h;
      } else {
        return 643 - height;
      }
  };

  let svgWidth = 634;
  let svgImgHeight = 643;

  if (width < 1919 && width > 1439) {
    svgWidth = 544;
  } else if (width < 1440) {
    svgWidth = 312;
    svgImgHeight = 312;
  } else {
    svgWidth = 634;
  }

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={`${svgWidth}`} height={`${svgImgHeight}`} viewBox={`0 0 ${svgWidth} ${svgImgHeight}`} preserveAspectRatio="none">
      <defs>
        <pattern xmlns="http://www.w3.org/2000/svg" id={imgId} patternUnits="userSpaceOnUse" width={`${svgWidth}`} height={`${svgImgHeight}`}>
          <image href={href} x="0" y="0" width="643" height="643" />
        </pattern>
      </defs>

      <path fill={`url(#${imgId})`} d={`M0,0 C150,00 271,00 ${svgWidth},0 L${svgWidth},${svgImgHeight}  L0,${svgImgHeight} Z`}>
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values={` 
                  M0,643 V${svgHeight(64)} C58.3581 ${svgHeight(64)} 47.3086 ${svgHeight(116)} 105.667 ${svgHeight(116)}C164.025 ${svgHeight(116)} 152.975 ${svgHeight(64)} 211.333 ${svgHeight(64)}C269.691 ${svgHeight(64)} 258.642 ${svgHeight(106)} 317 ${svgHeight(106)}C375.358 ${svgHeight(106)} 364.309 ${svgHeight(64)} 422.667 ${svgHeight(64)}C481.025 ${svgHeight(64)} 469.975 ${svgHeight(0)} 528.333 ${svgHeight(0)}C586.691 ${svgHeight(0)} 575.642 ${svgHeight(64)} 634 ${svgHeight(64)} V643 H0 Z; 
                  M0,643 V${svgHeight(126)} C58.3581 ${svgHeight(126)} 47.3086 ${svgHeight(37)} 105.667 ${svgHeight(37)}C164.025 ${svgHeight(37)} 152.975 ${svgHeight(126)} 211.333 ${svgHeight(126)}C269.691 ${svgHeight(126)} 258.642 ${svgHeight()} 317 ${svgHeight()}C375.358 ${svgHeight()} 364.309 ${svgHeight(126)} 422.667 ${svgHeight(126)}C481.025 ${svgHeight(126)} 469.975 ${svgHeight(44)} 528.333 ${svgHeight(44)}C586.691 ${svgHeight(44)} 575.642 ${svgHeight(126)} 634 ${svgHeight(126)} V643 H0 Z;
                  M0,643 V${svgHeight(102)} C58.3581 ${svgHeight(102)} 47.3086 ${svgHeight()} 105.667 ${svgHeight()}C164.025 ${svgHeight()} 152.975 ${svgHeight(102)} 211.333 ${svgHeight(102)}C269.691 ${svgHeight(102)} 258.642 ${svgHeight(48)} 317 ${svgHeight(48)}C375.358 ${svgHeight(48)} 364.309 ${svgHeight(102)} 422.667 ${svgHeight(102)}C481.025 ${svgHeight(102)} 469.975 ${svgHeight(191)} 528.333 ${svgHeight(191)}C586.691 ${svgHeight(191)} 575.642 ${svgHeight(102)} 634 ${svgHeight(102)} V643 H0 Z;
                  M0,643 V${svgHeight(64)} C58.3581 ${svgHeight(64)} 47.3086 ${svgHeight(116)} 105.667 ${svgHeight(116)}C164.025 ${svgHeight(116)} 152.975 ${svgHeight(64)} 211.333 ${svgHeight(64)}C269.691 ${svgHeight(64)} 258.642 ${svgHeight(106)} 317 ${svgHeight(106)}C375.358 ${svgHeight(106)} 364.309 ${svgHeight(64)} 422.667 ${svgHeight(64)}C481.025 ${svgHeight(64)} 469.975 ${svgHeight(0)} 528.333 ${svgHeight(0)}C586.691 ${svgHeight(0)} 575.642 ${svgHeight(64)} 634 ${svgHeight(64)} V643 H0 Z`}
        />
      </path>
    </svg>
  );
}
