import React from 'react';
import styles from './runninganimexample.css';

export function RunningAnimExample() {
  return (
<div style={{position:'relative'}} >
      <svg width="695" height="1182" viewBox="0 0 695 1182" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M1 1V541.345L128.938 691.484V1181H290.194H492.097V1116.1H694" stroke="#3D67FF" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round">
        </path>
      </svg>
      <div style={{position:'absolute', top:'0', bottom:'0',  left:'0'}} >
      <svg width="695" height="1182" viewBox="0 0 695 1182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.anim} d="M1 1V541.345L128.938 691.484V1181H290.194H492.097V1116.1H694" stroke="#3D67FF" stroke-width="3" stroke-linecap="round" stroke-dasharray="26 500%" stroke-dashoffset="0%" fill="none"></path>
      </svg>
      </div>
    </div>
  );
}
