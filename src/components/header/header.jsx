import React from 'react'
import "./header.css";

export default function Header({fontsize1, bg, color1, text1, text2, text3 }) {
  return (
    
    <div className="headerr" style={{backgroundColor: bg, color: color1}}>
      <span style={{fontSize: fontsize1}}>{text1}</span>
      <span>{text3}</span>
      <span>{text2}</span>
    </div>
  );
}
