import React from 'react'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'
import Firstpage from 'components/firstpage'
import { ToastProvider } from 'hooks/ToastContext';
function App() {
  return (
    <Router>
      <ToastProvider>
      <Switch>
        <Route path="/" exact component={Firstpage}/>
      </Switch>
      </ToastProvider>
    </Router>
  );
}

export default App;
