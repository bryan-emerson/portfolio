import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Nav';
// import HomeImage from './components/HomeImage';
import HomePage from './pages/HomePage'
import About from './pages/About'


function App() {
  return (
    <div className="App">
      <Router>
        <div>
        <Route path="/" component={Navigation}/>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
