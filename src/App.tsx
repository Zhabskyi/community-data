import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { Communities } from './components/communities/Communities';

function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Communities} />
          <Route exact path='/homes/:id'  />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
