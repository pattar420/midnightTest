import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage from './Homepage';
import Services from './Services';
import Projects from './Projects';
import Events from './Events';
import Sponsors from './Sponsors';
import ContactPage from './ContactPage';


const MainRouter = () => {
    return(
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/events?u' component={Events} />
        <Route path='/projects' component={Projects} />
        <Route path='/services' component={Services} />
        <Route path='/sponsors' component={Sponsors} />
        <Route path='/contact' component={ContactPage} />
    </Switch>
    )
}

export default MainRouter