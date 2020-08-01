import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {headerCards} from "./components/data";
import {social} from "./components/data";
import Homepage from './components/Homepage';
import Services from './components/Services';
import Projects from './components/Projects';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import ContactPage from './components/ContactPage';


class App extends Component {
  
  state = {
    headerComponents: headerCards,
    facebook: social[0],
    instagram: social[1],
    youtube: social[2]
  }

 render(){
    return (
    <>
    <BrowserRouter>
    <script src="https://kit.fontawesome.com/9925cd3b99.js" crossOrigin="anonymous"></script>


    <Header headerData={this.state.headerComponents} />
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path='/events' component={Events} />
    <Route path='/projects' component={Projects} />
    <Route path='/services' component={Services} />
    <Route path='/sponsors' component={Sponsors} />
    <Route path='/contact' component={ContactPage} />
    
    <Footer 
      facebook={this.state.facebook}
      instagram={this.state.instagram}
      youtube={this.state.youtube}
    />
    </Switch>
    </BrowserRouter>
    </>
  );
 }
 
}

export default App;
