import React, { Component } from 'react';
import {useMediaQuery} from 'react-responsive'
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import {isMobile} from "react-device-detect";
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import Drawer from './Drawer'

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
    backgroundColor: '#334B63',
    color: '#fff',
    position: 'relative',
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
                <div className="footer_">
                   <span style={{ display: "inline-block", textAlign: "Center" }}>
                   <br></br>
                <br></br>
                   <img src="./mcgillfooter_transparent.png" alt="" align="center" style={{
                  'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '30%'}}/>
                    <b><font textAlign="center" face="Avenir Book" color="white" size="2">
                      <br></br>
                         Developed by McGill University, Desautels Faculty of Management
                          students</font>
                        <br /> <br />
                   </b>
                

                <br></br>
                <font textAlign="center" face="Avenir Book" color="white" size="2">
                  This website and its contents herein, including all data, mapping,
                  and analysis is provided to the public strictly for educational
                  purposes. This data relies upon publicly available from Quebec's
                  government (and foreign governments), which has been authorized for
                  common usage. Reliance on the Website for medical guidance or use of
                  the Website for commercial purposes is strictly prohibited. Managers
                  of this website are not responsible for source data or for any use
                  of these data that goes beyond purely educational purposes.
                  <br></br>
                  <br></br>

                </font>
                <hr class="rounded"></hr>
                <br />
                <font face="Avenir Book" color="white" size="2">
                  <b>Faculty advisor: &nbsp;</b>
                </font>
                <a href="https://www.mcgill.ca/desautels/juan-camilo-serpa" className="link" style={{"color": "white", 'fontFamily': 'Avenir Book'}}>
                  Juan Camilo Serpa
                </a>{" "}
                <font face="Avenir Book" color="white" size="2">
                  • <b>Website developed by:</b> Bradley McBain, Brendan Marks
                  (McGill Engineering Students), Janna Agustin, Bogdan Tanasie •
                  <b> Content designed by:</b> Ruben Alba, Venkatesh Chandra, 
                  Jonathan Guzzo, Ramy Hammam, Jessica Zhang, Jasmine Jiang, 
                  Omar Lafif, Hana Galal, Guillaume Lapierre-Berger, 
                  Demi Wei & Katianicia Nafissatou
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
        
                </font>
              </span>
            </div>
          </footer>
            </div>
          </div>
            );
    }
  
      }

export default App;


