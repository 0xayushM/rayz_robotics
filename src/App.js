import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/header';
import Home from './components/home';
import About from './pages/about';
import Courses from './pages/courses';
import Projects from './pages/projects';
import Trends from './pages/trends';
import Footer from './components/footer';
import Join from './components/header/join';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/trends">
            <Trends />
          </Route>
          <Route path='/join'>
            <Join/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
