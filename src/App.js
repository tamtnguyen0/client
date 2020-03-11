import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import FormView from './views/FormView'
import SingleView from './views/SingleView'

function App() {
  return (
    <div className="App">
      <Router>
        <FormView path='/' />
        <SingleView path='/products/:id' />
      </Router>
    </div>
  );
}

export default App;
