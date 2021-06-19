import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import MainRouter from './components/MainRouter';


const App = () => {

  React.useEffect(() => {
    try{
      const toRem = document.querySelector('#toRemove')
      console.log('toRem: ', toRem)
      if (toRem){
        console.log('toRem found')
        toRem.parentNode.toRemoveChild(toRem)
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
 

export default App;
