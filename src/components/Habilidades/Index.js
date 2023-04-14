import React from 'react';

const Habilidades = ({ habilidades }) => (
  <ul>
    {habilidades.map((item) => (
      <li key={item.id}>{item.habilidade}</li>
    ))}
  </ul>
);

export default Habilidades;
