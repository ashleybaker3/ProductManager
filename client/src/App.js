import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Main from './views/main';
import Detail from './views/detail';
import Update from './views/update';

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/products" />

        <Route exact path="/products">
          <Main />
        </Route>

        <Route exact path ="/products/:id">
          <Detail />
        </Route>

        <Route exact path="/products/update/:id">
          <Update />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
