import React, {useState} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './client/components/Header';
import Footer from './client/components/Footer';
import './client/styles/App.css';
import {headerCards} from "./client/components/data";
import {social} from "./client/components/data";
import MainRouter from './client/components/mainRouter';

const App = () => {

  const [state, setState] = useState({
    headerComponents: headerCards,
    facebook: social[0],
    instagram: social[1],
    youtube: social[2],
    rss: 'https://anchor.fm/patrick-thurston'
  })
  

  return (
    <div>
    <BrowserRouter>
    <script src="https://kit.fontawesome.com/9925cd3b99.js" crossOrigin="anonymous"></script>
    <Header headerData={state.headerComponents} />
      <MainRouter />
    <Footer 
      facebook={state.facebook}
      instagram={state.instagram}
      youtube={state.youtube}
      rss={state.rss}
    />
    </BrowserRouter>
    </div>
  );
 }
 

export default App;
