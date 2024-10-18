// შექმნით Text კომპონენტი რომელიც დააბრუნებს h1. უნდა ჰქონდეს შემდეგი ფროფსები:
//       ფონტის ზომა,
//       ტექსტის ფერი,
//       ტექსტსის ადგილმდებარეობა, მაგალითად ცენტრში იყოს თავში თუ ბოლოში.

import React from "react";
import "./text.css";

export default function text({fontSize, textColor, textLocation,}) {
  return (
    <h1 className="text" style={{fontsize: fontSize, color: textColor,textAlign: textLocation }}>
    Hello World
    </h1>
  )
}
