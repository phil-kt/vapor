import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

var ReactGA = require('react-ga');
ReactGA.initialize('UA-36903668-2');

import App from './App';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Dots from './pages/portfolio-pages/dots/Dots';
import Roam from './pages/portfolio-pages/roam/Roam';
import Rendezvous from './pages/portfolio-pages/rendezvous/Rendezvous';
import Stokr from './pages/portfolio-pages/stokr/Stokr';
import Graffiti from './pages/portfolio-pages/graffiti/Graffiti';
import Argon from './pages/portfolio-pages/argon/Argon';
import Medi from './pages/portfolio-pages/medi/Medi';
import Hive from './pages/portfolio-pages/hive/Hive';
import Resume from './pages/resume/Resume';
import NotFound from './pages/404/404';
import './index.css';
import 'windows_98.css/dist/win98.css';

//const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
  window.scrollTo(0,0);
}

ReactDOM.render((
  <Router history={browserHistory}
          onUpdate={logPageView}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/about" component={About}/>
    <Route path="/portfolio" component={Portfolio}/>
      <Route path="/portfolio/dots" component={Dots}/>
      <Route path="/portfolio/roam" component={Roam}/>
      <Route path="/portfolio/rendezvous" component={Rendezvous}/>
      <Route path="/portfolio/stokr" component={Stokr}/>
      <Route path="/portfolio/graffiti" component={Graffiti}/>
      <Route path="/portfolio/argon" component={Argon}/>
      <Route path="/portfolio/medi" component={Medi}/>
      <Route path="/portfolio/hive" component={Hive}/>
    <Route path="/resume" component={Resume}/>
    <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('root'));
