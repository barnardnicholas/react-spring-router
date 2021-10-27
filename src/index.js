import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, Transition, animated, config } from 'react-spring';
import Header from './components/Header';
import ArnieIpsum from './containers/ArnieIpsum';
import DeloreanIpsum from './containers/DeloreanIpsum';
import BaconIpsum from './containers/BaconIpsum';
import './styles.css';
import DemoPage from './containers/DemoPage';

const customConfig = {
  mass: 1,
  tension: 600,
  friction: 30,
};

const AnimatedRoute = ({ children }) => {
  const { pathname } = useLocation();

  const transitions = useTransition(pathname, {
    from: { opacity: 0, transform: 'translateX(101vw) translateY(50vh) perspective(900px) rotateY(90deg)' },
    enter: { opacity: 1, transform: 'translateX(0) translateY(0) perspective(900px) rotateY(0deg)' },
    leave: {
      opacity: 0,
      transform: 'translateX(-101vw) translateY(50vh) perspective(900px) rotateY(-90deg)',
      pointerEvents: 'none',
    },
    config: customConfig,
  });

  return (
    <Route
      render={({ location }) =>
        transitions((style) => {
          return (
            <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>{children(location)}</animated.div>
          );
        })
      }
    />
  );
};

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <AnimatedRoute>
          {(location) => (
            <Switch location={location}>
              <Route exact path="/" render={(props) => <ArnieIpsum />} />
              <Route path="/bacon" render={(props) => <BaconIpsum />} />
              <Route path="/delorean" render={(props) => <DeloreanIpsum />} />
              <Route path="/demo-page" render={(props) => <DemoPage />} />
            </Switch>
          )}
        </AnimatedRoute>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
