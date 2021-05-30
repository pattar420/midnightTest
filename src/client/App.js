import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/MainRouter';
import '/dist/main.css'


const App = () => {

  React.useEffect(() => {
    const toRem = document.querySelector('#toRemove')
    console.log('toRem: ', toRem)
    if (toRem){
      console.log('toRem found')
      toRem.parentNode.toRemoveChild(toRem)
      
    }
    console.log('child Removed')
  }, 
  [])


  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
    
  )
 }
 

export default App;
