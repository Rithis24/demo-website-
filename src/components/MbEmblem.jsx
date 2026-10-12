import React from 'react';

/**
 * Authentic MB Automotives India emblem badge.
 */
export default function MbEmblem({ size = 44, style = {} }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 54 54" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, ...style }}
    >
      <rect 
        x="3" 
        y="3" 
        width="48" 
        height="48" 
        rx="10" 
        fill="#0369a1" 
        stroke="#ffffff" 
        strokeWidth="3" 
      />
      <g stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <path d="M14 13.5V40.5" />
        <path d="M14 13.5L20.5 28.5L27 13.5" />
        <path d="M27 13.5V40.5" />
        <path d="M27 13.5H35C38 13.5 39.5 16 39.5 19.5C39.5 23 38 25.5 35 25.5H27" />
        <path d="M27 25.5H36C39.5 25.5 41 28.5 41 32.5C41 36.5 39.5 40.5 35.5 40.5H27" />
      </g>
    </svg>
  );
}
