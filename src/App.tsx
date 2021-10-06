import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route path='/quiz' component={Quiz} />
    </div>
  )
}

export default App;
