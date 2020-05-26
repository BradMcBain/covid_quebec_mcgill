
import React, {Component} from 'react'
  
  /* Menu.jsx */
  class Menu extends React.Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
      
    onMouseOver(){
      document.body.style.overflow ='hidden';
    }

    onMouseOut(){
      document.body.style.overflow='hidden';
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){

      const styles={
        container: {
    
          position: 'fixed',
          top: 0,
          left: 0,
          height: this.state.open? '100%': 0,
          maxHeight: '100%',
          overflow: 'scroll',
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          background: '#CAD0D5',
          opacity: 0.95 ,
          color: 'black',
          transition: 'height 0.3s ease',
          zIndex: 2,
        },
        menuList: {
          paddingTop: '6rem',
        }
      }/**onMouseOut={() => this.onMouseOut()} onMouseOver={() => this.onMouseOver()} */
      return(
        <div id="div2"  style={styles.container}>
          {
            this.state.open?
              <div style={styles.menuList}>
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }
  
  export default Menu;