import React from 'react';

const badgeStyle = {
  display: 'flex',
  height: 'fit-content'
};

const betaStyle = {
  padding: '0 2px',
  fontSize: '0.75rem',
  fontWeight: 300,
  color: 'white',
  backgroundColor: '#38caa6',
  borderRadius: '0.125rem'
};

const Badge = () => {
  return (
    <div style={badgeStyle}>
      <div style={betaStyle}>Beta</div>
    </div>
  );
};

export default Badge;