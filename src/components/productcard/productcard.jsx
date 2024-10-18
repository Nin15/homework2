// 2) შექმენით ProductCard კომპონენტი რომელსაც ექნება შემდეგი ფროფსები: 
//     ფასი,
//     რაოდენობა,
//     სახელი,
//     აღწერა
//     ფერი


import React from 'react'
import "./productcard.css";

export default function productcard({price, amount, name, desc, Color}) {
  return (
    <div className="product-card" style={{color: Color}}>
        <h1>{price}</h1>
        <h2>{amount}</h2>
        <h2>{name}</h2>
        <p>{desc}</p>

    </div>
  )
}
