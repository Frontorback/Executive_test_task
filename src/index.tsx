import React from 'react';
import ReactDOM from 'react-dom';
import FirstQ from './1/FirstQ';
import SecondQ from './2/SecondQ';
import Rhyme from './5/Rhyme';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <FirstQ />
    <SecondQ />
    <Rhyme />
  </React.StrictMode>,
  document.getElementById('root')
);
