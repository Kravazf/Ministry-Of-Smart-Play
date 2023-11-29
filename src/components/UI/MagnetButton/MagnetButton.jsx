import React from 'react';
import cl from './MagnetButton.module.scss';

const MagnetButton = ({ children, onClick }) => (
    <div className={cl.buttonWrapper}>
      <button className={cl.button} onClick={onClick}>
          <span className={cl.particle} style={{
            '--a': '-45deg', '--x': '53%', '--y': '15%', '--d': '4em', '--f': '.7', '--t': '.15',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '150deg', '--x': '40%', '--y': '70%', '--d': '7.5em', '--f': '.8', '--t': '.08',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '10deg', '--x': '90%', '--y': '65%', '--d': '7em', '--f': '.6', '--t': '.25',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-120deg', '--x': '15%', '--y': '10%', '--d': '4em',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-175deg', '--x': '10%', '--y': '25%', '--d': '5.25em', '--f': '.6', '--t': '.32',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-18deg', '--x': '80%', '--y': '25%', '--d': '4.75em', '--f': '.5', '--t': '.4',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-160deg', '--x': '30%', '--y': '5%', '--d': '9em', '--f': '.9', '--t': '.5',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '175deg', '--x': '9%', '--y': '30%', '--d': '6em', '--f': '.95', '--t': '.6',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-10deg', '--x': '89%', '--y': '25%', '--d': '4.5em', '--f': '.55', '--t': '.67',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '-140deg', '--x': '40%', '--y': '10%', '--d': '5em', '--f': '.85', '--t': '.75',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '90deg', '--x': '45%', '--y': '65%', '--d': '4em', '--f': '.5', '--t': '.83',
          }}></span>
          <span className={cl.particle} style={{
            '--a': '30deg', '--x': '70%', '--y': '80%', '--d': '6.5em', '--f': '.75', '--t': '.92',
          }}></span>
          {children}
      </button>
    </div>
);

export default MagnetButton;
