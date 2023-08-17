import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Import your components
import About from './components/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={<Home />} />
            <Route path="/about" component={<About />} />
            <Route path='/projects' component={Projects} />
            <Route path="/contact" component={Contact} />
        </Switch>
    );
};

export default Routes;