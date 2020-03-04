import React from 'react';
import './App.scss';
import { State } from './context/state';
import './App.scss';
import { Header } from './components/header/Header';

function App() {
  return (
    <State>
      <div className='container'>
        <Header />
      </div>
    </State>
  );
}

export default App;
