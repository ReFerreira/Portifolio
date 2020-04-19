import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Experience from './pages/Experience';

export default function Routes() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Main}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/education" component={Education}/>
      <Route path="/experience" component={Experience}/>
    </Switch>
    </BrowserRouter>
  );
}