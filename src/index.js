import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import ArnieIpsum from './containers/ArnieIpsum';
import DeloreanIpsum from './containers/DeloreanIpsum';
import BaconIpsum from './containers/BaconIpsum';
import './styles.css';
import DemoPage from './containers/DemoPage';
import AnimatedRoute from './AnimatedRoute';
import Home from './containers/Home';
import Splash from './containers/Splash';
import MouseFollowerDemo from './containers/MouseFollowerDemo';
import MouseTiltDemo from './containers/MouseTiltDemo';
import MouseShadowDemo from './containers/MouseShadowDemo';

const App = () => {
  return (
    <Router>
      <Header />
      <AnimatedRoute>
        {(location) => (
          <Switch location={location}>
            <Route exact path="/home" render={(props) => <Home />} />
            <Route exact path="/arnie" render={(props) => <ArnieIpsum />} />
            <Route path="/bacon" render={(props) => <BaconIpsum />} />
            <Route path="/delorean" render={(props) => <DeloreanIpsum />} />
            <Route path="/demo-page" render={(props) => <DemoPage />} />
            <Route path="/mouse-follower" render={(props) => <MouseFollowerDemo />} />
            <Route path="/mouse-tilt" render={(props) => <MouseTiltDemo />} />
            <Route path="/mouse-shadow" render={(props) => <MouseShadowDemo />} />
          </Switch>
        )}
      </AnimatedRoute>
    </Router>
  );
};

const RootApp = () => {
  const [isSplash, setIsSplash] = useState(true);
  if (window.location.pathname === '/')
    return <Home isSplash={isSplash} setIsSplash={setIsSplash} isIntro={true} extraStyles={{ height: '100vh' }} />;
  return <App />;
};

ReactDOM.render(<RootApp />, document.getElementById('root'));
