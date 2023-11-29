import React from 'react';
import cl from './GlowButton.module.scss';

const GlowButton = ({ children, onClick }) => (
  <button className={cl.btn} onClick={onClick}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    {children}
  </button>

);

export default GlowButton;
