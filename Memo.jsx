import React, { useMemo, useState } from 'react';

const Memoire = () => {
  const [count, setCount] = useState(0);

  const squaredValue = useMemo(() => {
    console.log("Calcul carre");
    return count * count;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Squared Value: {squaredValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Memoire;



