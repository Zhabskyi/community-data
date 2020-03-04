import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { Communities } from './components/communities/Communities';

function App() {
  return (
      <div className='container'>
        <Header />
        <Communities />
      </div>
  );
}

export default App;
