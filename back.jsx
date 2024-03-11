import React, { useCallback, useState } from 'react';

const Back = () => {
  const [count, setCount] = useState(0);

 
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      {}
      <button onClick={handleClick}>Incrementer</button>
    </div>
  );
};

export default Back;
