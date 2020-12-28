import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './List';
import Item from './Item';

function App() {
  return (
    <Switch>
      <Route path='/' exact render={(props) => <List {...props} />} />
      <Route path='/:id' exact render={(props) => <Item {...props} />} />
    </Switch>
  );
}

export default App;
