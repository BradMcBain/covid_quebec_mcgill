import React, { Component } from 'react';  
import tableau from 'tableau-api';  

var viz;

class TableauMontreal_updated extends Component {
    
    shouldComponentUpdate(){
        return viz==null;
    }

    componentDidMount(){
        this.initViz()
    }

    initViz(){
        const vizURL = 'https://public.tableau.com/views/CoronavirusCOVID-19inMontreal/COVID-19inMontreal?:display_count=y&:origin=viz_share_link';
        const vizContainer = this.vizContainer;
        const options = {
            hideTabs: true,
            device: localStorage.getItem('device'),
            toolbarPosition: "ApiToolbarPosition.Top",
        };

        viz = new window.tableau.Viz(vizContainer, vizURL, options)
    }

    render() {  
        return (  
          <div ref={(div) => { this.vizContainer = div }}>  
          </div>  
        )  
      }
    }

    export default TableauMontreal_updated;