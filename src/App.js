import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import Drawer from './Drawer'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';

if (isMobile) {
  localStorage.setItem("device","mobile");
} else {
  localStorage.setItem("device","desktop");
}

const styles = {
  appBar: {
    top: 'auto',
    bottom: 0,
    position: 'absolute'
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#45a1ff',
    color: '#fff',
    position: 'relative',
    marginLeft: '6%'
}
};

class App extends Component{
  render(){
      const {classes} = this.props;
      return (
        <div className="page-container">
          <div className="content-wrap">
            
            <Router basename={process.env.PUBLIC_URL}>
              <Route component={App} path="/">
                <Redirect from="*" to="/" />
              </Route>
            </Router>
          <Drawer>
          </Drawer>
          <footer style={styles.footer}>
          <img src="./qc.ico" alt="" align="center" style={{ 'marginTop':'5%', 
            'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '5%'}}/>
          </footer>
            </div>
          </div>
            );
    }
  
      }

export default App;


