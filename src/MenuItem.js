import React, {Component} from 'react';
import { keyframes } from "styled-components";

/* MenuItem.jsx*/
class MenuItem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: `1s appear forwards`,
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`'Open Sans', sans-serif`,
          fontSize: '1.2rem',
          padding: '1rem 0',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? 'grey':'black',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },
        line: {
          width: '90%',
          height: '1px',
          background: 'black',
          margin: '0 auto',
          animation: '0.5s shrink forwards',
          animationDelay:this.props.delay,
          
        },
        subtitle: {
          
        }
      }
      const renderTitle = () => {
        if (this.props.children.includes('MONTREAL')) {
          return  <b><center>MONTREAL</center></b>
        } else if (this.props.children.includes('MONTRÉAL')) {
          return <b><center>MONTRÉAL</center></b>
        } else if (this.props.children.includes('PROVINCE'))
          return <b><center>PROVINCE</center></b>
        else{
          return <font>{this.props.children}</font>;
        }
}

      return(
        <div style={styles.container}>
          <style>{`
            @keyframes appear {
              0% {
                opacity: 0;
              }
              100% {
                opacity: 1;
              }
            }
        `}</style>
          <div 
            style={styles.menuItem} 
            //onMouseEnter={()=>{this.handleHover();}} 
            //onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          > <style>{`
          @keyframes slideIn {
            0% {
              transform: translateX(-4%);
            }
            100% {
              transform: translateX(0%);
            }
          }
      `}</style>
      {renderTitle()}          
      </div>
        <div style={styles.line}>
        <style>{`
          @keyframes shrink {
            0% {
              width: 95%;
            }
            100% {
              width: 90%;
            }
          }
      `}</style>
        </div>
      </div>  
      )
    }
  }
  
  export default MenuItem;