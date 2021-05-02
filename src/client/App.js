import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './styles/App.css';
import Body from './components/Body';

const App = () => {


  return (
    <div>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
    </div>
  );
 }
 

export default App;
