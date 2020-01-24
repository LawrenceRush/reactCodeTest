import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';


const Test = () => {
 

  const multiAnimation = useSpring({
    from: { 
      position:" absolute", 
      transform: "translate3d(0vh,0,0)",
      color:"blue"
  },
    to: [

        { 
          position:" absolute", 
          transform:  "translate3d(25vh,0,0)",
          color: "green"
        },
        { 
          position:" absolute", 
          transform:  "translate3d(50vh,0,0)",
          color: "green"
        }
    ]
        
  });
  return (
    <div>
     
      <animated.h1 style={multiAnimation}>Hello World</animated.h1>
    </div>
  )
};

export default Test;