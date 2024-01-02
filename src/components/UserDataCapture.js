// UserDataCapture.js
import React, { useState } from 'react';

const UserDataCapture = () => {
  const [userData, setUserData] = useState({
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Captura de Datos de Usuario</h2>
      <label>Nombre: </label>
      <input type="text" name="name" value={userData.name} onChange={handleChange} />
      <br />
      <label>Edad: </label>
      <input type="text" name="age" value={userData.age} onChange={handleChange} />
      <br />
      <label>Email: </label>
      <input type="text" name="email" value={userData.email} onChange={handleChange} />
    </div>
  );
};

export default UserDataCapture;
