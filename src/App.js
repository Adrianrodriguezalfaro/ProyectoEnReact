// App.js
import React, { useState } from 'react';
import './App.css';  // Importa el archivo de estilos
import ClickCounter from './components/ClickCounter';
import UserDataCapture from './components/UserDataCapture';
import CanineAgeCalculator from './components/CanineAgeCalculator';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [modules, setModules] = useState({
    clickCounter: true,
    userDataCapture: true,
    canineAgeCalculator: true,
    weatherDisplay: true,
  });

  const toggleModule = (moduleName) => {
    setModules({ ...modules, [moduleName]: !modules[moduleName] });
  };

  // App.js
return (
  <div>
    <h1>Gestión de Módulos</h1>

    <div className="module-container click-counter">
      {modules.clickCounter && <ClickCounter />}
    </div>

    <div className="module-container user-data-capture">
      {modules.userDataCapture && <UserDataCapture />}
    </div>

    <div className="module-container canine-age-calculator">
      {modules.canineAgeCalculator && <CanineAgeCalculator />}
    </div>

    <div className="module-container weather-display">
      {modules.weatherDisplay && <WeatherDisplay />}
    </div>
  </div>
);

};

export default App;
