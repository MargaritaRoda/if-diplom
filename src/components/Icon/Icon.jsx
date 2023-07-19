import React from 'react';
const PUBLIC_PATH = process.env.PUBLIC_URL;

export const Icon = ({ className, name, onClick }) => {
  return (
    <svg className={className} onClick={onClick}>
      <use href={`${PUBLIC_PATH}/sprite.svg#${name}`} />
    </svg>
  );
};
