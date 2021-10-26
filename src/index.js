import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Transition, animated, config } from 'react-spring';
import Header from './components/Header';
import ArnieIpsum from './containers/ArnieIpsum';
import DeloreanIpsum from './containers/DeloreanIpsum';
import BaconIpsum from './containers/BaconIpsum';
import './styles.css';
import DemoPage from './containers/DemoPage';

const customConfig = {
  mass: 1,
  tension: 600,
  friction: 20,
};

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        keys={location => location.pathname}
        from={{ opacity: 0, transform: 'translateX(101vw) translateY(50vh) perspective(900px) rotateY(90deg)' }}
        enter={{ opacity: 1, transform: 'translateX(0) translateY(0) perspective(900px) rotateY(0deg)' }}
        leave={{
          opacity: 0,
          transform: 'translateX(-101vw) translateY(50vh) perspective(900px) rotateY(-90deg)',
          pointerEvents: 'none',
        }}
        config={customConfig} // can either be spring-based or duration-based, not both
      >
        {location => style => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>{children(location)}</animated.div>
        )}
      </Transition>
    )}
  />
);

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <AnimatedRoute>
          {location => (
            <Switch location={location}>
              <Route exact path="/" render={props => <ArnieIpsum />} />
              <Route path="/bacon" render={props => <BaconIpsum />} />
              <Route path="/delorean" render={props => <DeloreanIpsum />} />
              <Route path="/demo-page" render={props => <DemoPage />} />
            </Switch>
          )}
        </AnimatedRoute>
      </>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

{
  /* <Transition
          items={this.state.items}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={config.molasses}
          >
          {({ opacity }, item) => (
            <animated.div
              style={{
                opacity: opacity.to(item.op),
                transform: opacity
                  .to(item.trans)
                  .to(y => `translate3d(0,${y}px,0)`),
              }}>
              {item.fig}
            </animated.div>
          )}
        </Transition> */
}
