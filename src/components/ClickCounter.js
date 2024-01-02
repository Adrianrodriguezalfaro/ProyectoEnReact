// ClickCounter.js
import React, { useState } from 'react';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Click Counter</h2>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Incrementar</button>
    </div>
  );
};

export default ClickCounter;
