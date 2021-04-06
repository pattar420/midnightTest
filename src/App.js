import React, {useState} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './client/components/Header';
import Footer from './client/components/Footer';
import './client/styles/App.css';
import {headerCards} from "./client/components/data";
import {social} from "./client/components/data";
import Homepage from './client/components/Homepage';
import Services from './client/components/Services';
import Projects from './client/components/Projects';
import Events from './client/components/Events';
import Sponsors from './client/components/Sponsors';
import ContactPage from './client/components/ContactPage';


const App = () => {

  const [state, setState] = useState({
    headerComponents: headerCards,
    facebook: social[0],
    instagram: social[1],
    youtube: social[2]})
  

  return (
    <div>
    <BrowserRouter>
    <script src="https://kit.fontawesome.com/9925cd3b99.js" crossOrigin="anonymous"></script>


    <Header headerData={state.headerComponents} />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/events' component={Events} />
    <Route path='/projects' component={Projects} />
    <Route path='/services' component={Services} />
    <Route path='/sponsors' component={Sponsors} />
    <Route path='/contact' component={ContactPage} />
    
    <Footer 
      facebook={state.facebook}
      instagram={state.instagram}
      youtube={state.youtube}
    />
    </Switch>
    </BrowserRouter>
    </div>
  );
 }
 

export default App;
