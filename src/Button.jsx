import React from 'react';

const Button = ({ onClick, mark }) => {
  return <button onClick={onClick} className="Tabs" ><p className='CenterMark'>{mark}</p></button>;
};

export default Button;