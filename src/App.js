import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import FormView from './views/FormView'
import SingleView from './views/SingleView'
import SingleEdit from './views/SingleEdit'

function App() {
  return (
    <div className="App">
      <Router>
        <FormView path='/' />
        <SingleView path='/products/:id' />
        <SingleEdit path='/products/:id/edit' />
      </Router>
    </div>
  );
}

export default App;
