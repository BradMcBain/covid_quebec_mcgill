import React, { Component } from 'react';  
import tableau from 'tableau-api';  
  
var viz = null;  
  
class Tableau11 extends Component { 
  shouldComponentUpdate(){
    return viz === null;
  } 
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/COVID-19QUEBECDASHBOARD_Automatic/MontrealNewCasesPerDay';  
    const vizContainer = this.vizContainer;
    const options = {
        hideTabs: true,
        device: localStorage.getItem("device"),
        toolbarPosition: "ApiToolbarPosition.Top",
    };
    viz = new window.tableau.Viz(vizContainer, vizUrl, options)  
  }  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
  
}  

export default Tableau11; 