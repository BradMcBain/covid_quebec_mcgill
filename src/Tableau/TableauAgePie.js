import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import tableau from 'tableau-api';

var viz;
class TableauAgePie extends Component {
  shouldComponentUpdate() {
    return viz === null;
  }
  componentDidMount() {
    this.initViz();
  }

  initViz() {
    const vizUrl =
      'https://public.tableau.com/views/COVID-19QUEBECDASHBOARD_Automatic/AgeGroup';
    const vizContainer = this.vizContainer;
    const options = {
      hideTabs: true,
      device: localStorage.getItem('device'),
      toolbarPosition: 'ApiToolbarPosition.Top',
    };
    viz = new window.tableau.Viz(vizContainer, vizUrl, options);
  }

  render() {
    return (
      <div
        ref={(div) => {
          this.vizContainer = div;
        }}
      ></div>
    );
  }
}

export default TableauAgePie;
