import React, { useState, useLayoutEffect } from 'react';

const ComponentWithLayoutEffect = () => {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      const newWidth = document.documentElement.clientWidth;
      setWidth(newWidth);
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []); 

  return (
    <div>
      <p>Window width: {width}px</p>
    </div>
  );
};

export default ComponentWithLayoutEffect;
