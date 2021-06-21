import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/MainRouter';
import { hot } from 'react-hot-loader'


const App = () => {

  React.useEffect(() => {
    try{
      const toRem = document.querySelector('#toRemove')
      if (toRem){
        console.log('toRem found', toRem)
        toRem.parentNode.removeChild(toRem)
      }
    } catch (err) {
      if (err){
        console.log('there was an error: ', err)
      }
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
 

export default hot(module)(App);
