import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Body from './components/Body';


const App = () => {


  return (
    <div id='body-wrapper'>
    <BrowserRouter>
      <Body />
    </BrowserRouter>
    </div>
    
  );
 }
 

export default App;
