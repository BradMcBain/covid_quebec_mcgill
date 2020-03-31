import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import Drawer from './Drawer'

if (isMobile) {
  localStorage.setItem("device","mobile");
} else {
  localStorage.setItem("device","desktop");
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      lang: "en"
    }
  }
  getLang(t){
    if (t.state.lang === "en"){
      // t.state.lang = "fr";
      this.setState({lang: "fr"})
    } else {
      // t.state.lang = "en";
      this.setState({lang: "en"})
    }
  }
  render(){
    if (isMobile) {
      return (
        <div className="page-container">
          <div className="content-wrap">
              Mobile Site Unavailable, Please Visit Us at www.covidqc.com on Desktop.
            </div>
          </div>
      );
    } else {
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
                <Footer
                  columns={[
                    {
       
                      title: 'This website and its contents herein, including all data, mapping, and analysis is provided to the public strictly for educational  purposes.  This data relies upon publicly available from Quebec\'s government (and foreign governments), which has been authorized for common usage. Reliance on the Website for medical guidance or use of the Website for commercial purposes is strictly prohibited.  Managers of this website are not responsible for source data or for any use of these data that goes beyond purely educational purposes.',
                      url: '',
                      description: '',
                      openExternal: true,
                    },
                  ]}
                  style={{'paddingLeft':'12%','color':'white', 'fontSize':'10px'}}
                  bottom="Website Developed by Bradley McBain & Brendan Marks (McGill Engineering Students)"
                  theme="dark"
                  backgroundColor="#334B63"
                />
            </div>
          </div>
            );
            }
    }
  
      }

export default App;


