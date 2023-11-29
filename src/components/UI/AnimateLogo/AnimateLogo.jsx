import React, { useEffect, useRef } from 'react';
import cl from './AnimateLogo.module.css';

const AnimateLogo = () => {
  const textRef = useRef();

  useEffect(() => {
    const text = textRef.current;
    if (text) {
      text.innerHTML = text.innerText.split('')
        .map((letter, i) => `<span style='transition-delay:${i * 40}ms;
        filter:hue-rotate(${i * 3}deg)'>${letter}</span>`).join('');
    }
  }, []);

  return (
    <h1 ref={textRef} className={cl.text}>
      Ministry of Smart Play
    </h1>
  );
};

export default AnimateLogo;
