import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import StickyFooter from './StickyFooter'
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom'

if (isMobile) {
  localStorage.setItem("device","mobile");
} else {
  localStorage.setItem("device","desktop");
}

class App extends Component{
  render(){
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Route component={App} path="/">
          <Redirect from="*" to="/" />
        </Route>
      </Router>
      <StickyFooter/>
      <Button variant="contained" color="primary">
        Language
       </Button>
       <StickyFooter></StickyFooter>
       
       
    </div>
  );
  }
}




export default App;


