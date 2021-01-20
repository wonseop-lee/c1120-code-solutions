import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const list = pokedex.map(pokemon => {
  return <li key={pokemon.number}>{pokemon.name}</li>;
});

const listContainer = (
  <ul>
    {list}
  </ul>
);

ReactDOM.render(
  listContainer,
  document.querySelector('#root')
);
