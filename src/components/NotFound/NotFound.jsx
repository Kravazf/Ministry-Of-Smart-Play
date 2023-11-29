import React from 'react';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100vh',
      backgroundColor: 'red',
      textAlign: 'center',
      justifyContent: 'center',
    }}>
      <h1 style={{
        fontSize: '55px',
        color: 'white',
      }}>404</h1>
      <p style={{
        fontSize: '45px',
        color: 'white',
      }}>NOT FOUND</p>
    </div>
  );
}
