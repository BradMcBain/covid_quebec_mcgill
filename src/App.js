import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Button from '@material-ui/core/Button';
import ReactDOM from 'react-dom'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import { render } from 'react-dom';

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
          <div className="App">
          <footer>
            <Footer
              columns={[
                {
                  icon: (
                    <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                  ),
                  title: 'This website and its contents herein, including all data, mapping, and analysis is provided to the public strictly for educational  purposes.  These data relies upon publicly available from Quebec\'s government (and foreign governments), which has been authorized for common usage. Reliance on the Website for medical guidance or use of the Website for commercial purposes is strictly prohibited.  Managers of this website are not responsible for source data or for any use of these data that goes beyond purely educational purposes',
                  url: 'https://yuque.com',
                  description: '知识创作与分享工具',
                  openExternal: true,
                },
              ]}
              bottom="Made with ❤️ by McGill"
              backgroundColor="#9FA7FF"
              theme='light'
            />
            </footer>
          </div>
    </div>
          
        );
        }
      }




export default App;


