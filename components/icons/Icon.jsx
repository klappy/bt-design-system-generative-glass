import React from 'react';
// Glyph outlines are Lucide (MIT, lucide.dev) — the source frames ship no icon set,
// so Lucide is the flagged substitution: 24px grid, 2px round stroke, no fills.
const P={
  mic:['M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z','M19 10v2a7 7 0 0 1-14 0v-2','M12 19v3'],
  navigation:['M3 11l19-9-9 19-2-8-8-2z'],
  plus:['M5 12h14','M12 5v14'],
  chevronLeft:['M15 18l-6-6 6-6'],
  chevronRight:['M9 18l6-6-6-6'],
  arrowUpRight:['M7 17L17 7','M7 7h10v10'],
  bookmark:['M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'],
  maximize:['M15 3h6v6','M9 21H3v-6','M21 3l-7 7','M3 21l7-7'],
  minimize:['M8 3v3a2 2 0 0 1-2 2H3','M21 8h-3a2 2 0 0 1-2-2V3','M3 16h3a2 2 0 0 1 2 2v3','M16 21v-3a2 2 0 0 1 2-2h3'],
  moon:['M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z'],
  sun:['M12 4V2','M12 22v-2','M4 12H2','M22 12h-2','M6.3 6.3L4.9 4.9','M19.1 19.1l-1.4-1.4','M6.3 17.7l-1.4 1.4','M19.1 4.9l-1.4 1.4'],
  delete:['M20 6H9l-5 6 5 6h11a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z','M16 10l-4 4','M12 10l4 4'],
  shift:['M12 3l8 9h-4v7H8v-7H4z'],
  search:['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z','M21 21l-4.3-4.3'],
  compass:['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z','M16.2 7.8l-2.2 6.4-6.4 2.2 2.2-6.4z'],
  sparkle:['M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z'],
  // BT additions (Lucide): book, headphones, users, check, cloudOff, globe, languages, x
  book:['M4 19.5A2.5 2.5 0 0 1 6.5 17H20','M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z'],
  headphones:['M3 18v-6a9 9 0 0 1 18 0v6','M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z'],
  users:['M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2','M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z','M23 21v-2a4 4 0 0 0-3-3.87','M16 3.13a4 4 0 0 1 0 7.75'],
  check:['M20 6L9 17l-5-5'],
  cloudOff:['M22.6 16.5A5 5 0 0 0 18 10h-1.3A8 8 0 0 0 5.5 5.5','M3 3l18 18','M5 10A5 5 0 0 0 7 19h11'],
  globe:['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z','M2 12h20','M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'],
  languages:['M5 8l6 6','M4 14l6-6 2-3','M2 5h12','M7 2h1','M22 22l-5-10-5 10','M14 18h6'],
  x:['M18 6L6 18','M6 6l12 12'],
  // FIA alpha v2 additions (Lucide 1.50.0, MIT; rect/circle converted to paths, filled dots drawn as stroke dots):
  // play, pause, download, image, chevronDown, share, warning=triangle-alert, update=refresh-cw, chat=message-circle,
  // list, settings=sliders-horizontal, message=message-square, tag, info, ellipsis, map, video
  play:['M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z'],
  pause:['M15 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z','M6 3h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z'],
  download:['M12 15V3','M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4','M7 10l5 5 5-5'],
  image:['M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z','M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z','M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21'],
  chevronDown:['M6 9l6 6 6-6'],
  share:['M12 2v13','M16 6l-4-4-4 4','M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8'],
  warning:['M21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3','M12 9v4','M12 17h.01'],
  update:['M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8','M21 3v5h-5','M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16','M8 16H3v5'],
  chat:['M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719'],
  list:['M3 5h.01','M3 12h.01','M3 19h.01','M8 5h13','M8 12h13','M8 19h13'],
  settings:['M10 5H3','M12 19H3','M14 3v4','M16 17v4','M21 12h-9','M21 19h-5','M21 5h-7','M8 10v4','M8 12H3'],
  message:['M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z'],
  tag:['M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z','M7.5 7.5h.01'],
  info:['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z','M12 16v-4','M12 8h.01'],
  ellipsis:['M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z','M19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z','M5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z'],
  map:['M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z','M15 5.764v15','M9 3.236v15'],
  video:['M16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5','M4 6h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z']
};
export function Icon({name,size=20,stroke=1.7,color='currentColor',style,...rest}){
  const d=P[name]; if(!d) return null;
  return React.createElement('svg',{width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:color,
    strokeWidth:stroke,strokeLinecap:'round',strokeLinejoin:'round',style:{display:'block',flex:'none',...style},...rest},
    d.map((p,i)=>React.createElement('path',{key:i,d:p})));
}
export const iconNames=Object.keys(P);
