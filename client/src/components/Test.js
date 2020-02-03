import React, { useState } from 'react';
  import { animated, useTransition } from 'react-spring';


const Test = () => {
  
  
  const [on, toggle] = useState(false);
  
  const transition = useTransition(on, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  
  return (
  <div>
    {transition.map(({ item, key, props }) => (
    item && <animated.div style={props} >Hello world</animated.div>
    ))}
  
    <button onClick={() => toggle(!on)}>Change</button>
  </div>
  );
};

export default Test;