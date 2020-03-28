import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import isMobile from "react-device-detect";

if (isMobile) {
  localStorage.setItem("device","mobile");
} else {
  localStorage.setItem("device","desktop");
}

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


