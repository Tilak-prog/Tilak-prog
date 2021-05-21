import React from 'react';

const Logo = (props) => {
  return (
    <div className="relative w-32 h-8">
      <img src="/logo.png" width="180" height="180" className={props.className}></img>
    </div>
  );
};

export default Logo;
