import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Transition, animated, config } from 'react-spring'
import Header from './components/Header'
import ArnieIpsum from './containers/ArnieIpsum'
import DeloreanIpsum from './containers/DeloreanIpsum'
import BaconIpsum from './containers/BaconIpsum'
import './styles.css'

const AnimatedRoute = ({ children }) => (
  <Route
    render={({ location }) => (
      <Transition
        native
        items={location}
        keys={location => location.pathname}
        from={{ opacity: 0, transform: 'perspective(900px) rotateY(180deg)' }}
        enter={{ opacity: 1, transform: 'perspective(900px) rotateY(0deg)' }}
        leave={{ opacity: 0, transform: 'perspective(900px) rotateY(-180deg)', pointerEvents: 'none' }}>
        {location => style => (
          <animated.div style={{ ...style, position: 'absolute', width: '100%' }}>{children(location)}</animated.div>
        )}
      </Transition>
    )}
  />
)

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
            </Switch>
          )}
        </AnimatedRoute>
      </>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
