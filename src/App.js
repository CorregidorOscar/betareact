// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Landing />
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
