import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route component={App} path="/">
          <Redirect from="*" to="/" />
        </Route>
      </Router>
    </div>
  );
}

export default App;


