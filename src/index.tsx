import React from 'react';
import ReactDOM from 'react-dom';
import StudentPage from './pages/Students/StudentPage';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path='/'>
          <StudentPage />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
