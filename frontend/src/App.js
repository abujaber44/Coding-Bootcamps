import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Schools from './components/Schools/Schools'
import School from './components/School/School';
import About from './components/About';
// import Login from './components/Login'
// import Profile from './components/Profile'
import './App.css';

function App() {
  return (
    <Router> 
    <div className="App">
      <Switch>
        <Route exact path="/" component={Schools} />
        <Route exact path="/schools/:slug" component={School} />
        <Route exact path="/about" component={About} />
        {/* <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} /> */}
      </Switch>
    </div>
    </Router>
  );
}

export default App;




