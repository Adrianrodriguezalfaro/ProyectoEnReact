// CanineAgeCalculator.js
import React, { useState } from 'react';

const CanineAgeCalculator = () => {
  const [humanAge, setHumanAge] = useState('');
  const [canineAge, setCanineAge] = useState(null);

  const handleCalculate = () => {
    const calculatedAge = humanAge * 7;
    setCanineAge(calculatedAge);
  };

  return (
    <div>
      <h2>Cálculo de Edad Canina</h2>
      <label>Edad Humana: </label>
      <input type="text" value={humanAge} onChange={(e) => setHumanAge(e.target.value)} />
      <br />
      <button onClick={handleCalculate}>Calcular Edad Canina</button>
      {canineAge !== null && <p>Edad Canina: {canineAge}</p>}
    </div>
  );
};

export default CanineAgeCalculator;
