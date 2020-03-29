import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
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
      <Button variant="contained" color="primary">
        Language
       </Button>
          <div class="stickybottom">
            <BottomNavigation style={{'width':'100%', 'position':'fixed', 'bottom':'0', 'background-color': '#ADD8E6', 'height':'15%'}}>
              <span>This app is for education purposes only.</span>
            </BottomNavigation>
          </div>
          </div>
          
        );
        }
      }




export default App;


