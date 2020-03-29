import React, { Component } from 'react';  
import tableau from 'tableau-api';  
  
  
class Tableau extends Component {  
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/Book1_15853557061790/Version2';  
    const vizContainer = this.vizContainer;
    const options = {
        hideTabs: true,
        device: localStorage.getItem("device"),
        toolbarPosition: "ApiToolbarPosition.Top",
        onFirstInteractive: () => {
          const sheet = viz.getWorkbook().getActiveSheet().getWorksheets().get("Panel 1.1");
          console.log(sheet);
      }
    };
    let viz = new window.tableau.Viz(vizContainer, vizUrl, options)  
  }  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
  
}  

  
  
export default Tableau; 