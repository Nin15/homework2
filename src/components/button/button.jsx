// 3) შექმენით ბათონის კომპონენტი რომელსაც ექნება შემდეგი ფროფსები:
//      ბექგრაუდ ფერი
//      სიგრძე
//      სიგანე
//      და ტექსტი რომელსაც ბათონში ჩაწერთ.


import React from 'react'
import "./button.css";


export default function button({textContent, width, height, bg}) {
  return (
    <button className="button" style={{width, height, backgroundColor: bg}}>{textContent}</button>
  )
}
