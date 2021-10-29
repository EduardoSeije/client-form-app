import React from 'react';
import { Route, Switch } from 'react-router';
import { ClientForm } from './components/ClientForm';
import { Home } from './pages/Home';
import { Clients } from './pages/Clients';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/clientform' component={ ClientForm } />
        <Route path='/clientlist' component= { Clients } />
      </Switch>
    </div>
  );
}

export default App;
