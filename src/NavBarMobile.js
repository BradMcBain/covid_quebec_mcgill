import React, {Component} from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Exercises from './Exercises'
import Sponsors from './Sponsors'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'
import NavBar from './NavBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: '3%',
    marginLeft: '12%'
  }
});
class NavBarMobile extends React.Component {
  targetElement = null;
    constructor(props){
      super(props);
      this.state={
        menuOpen:false,
        displayTranslate: "Français"
      }
    }

    componentDidMount() {
      // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
      // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
      // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
      this.targetElement = document.querySelector('#div2');
    }
    getLang() {
      if (this.state.displayTranslate === "Français"){
          //this.setState({lang: "fr"});
          //this.setState({displayTranslate: "English"});
        this.props.langCallback('fr')
        this.setState({displayTranslate: "English"})
      } else {
        //  this.setState({lang: "en"});
        //  this.setState({displayTranslate: "Français"});
        this.props.langCallback('en')
        this.setState({displayTranslate: "Français"})
      }
  }  


    getContent(index){
      this.props.callback(index);
    }

    handleMenuClick() {
      if (this.state.menuOpen === true){
         enableBodyScroll(this.targetElement);
      }else{
          disableBodyScroll(this.targetElement);        
      }
      this.setState({menuOpen:!this.state.menuOpen});
    }
    
    handleLinkClick() {
      enableBodyScroll(this.targetElement);
      this.setState({menuOpen: false});
    }
    jumpTo = (id) => {
      this.setState({rowToShow: id});
    }
    
    render(){
      const {classes} = this.props;
      const styles= 
        {
          container:{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: '99',
            opacity: 1,
            display:'flex',
            alignItems:'center',
            background: '#384B61',
            width: '100%',
            height: '10%',
            color: 'white',
            fontFamily:'Lobster',
          },
          logo: {
            margin: 'auto',
            marginRight: '30%',
            display: "block",
            textAlign: "center",
            fontFamily: "Nunito Sans",
            fontSize: "15px",
          },
          body: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            //width: '100vw',
            height: '100vh',
            overflow: 'scroll',
            filter: this.state.menuOpen ? 'blur(2px)':null,
            transition: 'filter 0.5s ease',
          },
        }
      const menuEn = ['MONTREAL','Map', 'PROVINCE', 'Map', 'Cases per day', 'Cases per type', 'Tests', 'Quebec vs. the world', 'Rate of change', 'Days to double']
      const menuItemsEn = menuEn.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            //onClick={()=>{this.handleLinkClick(); this.updateShared(index)}}
            onClick={()=>{
                //var montrealIndex = menuEn.indexOf("MONTREAL")
                //var provinceIndex = menuEn.indexOf("PROVINCE")
                switch(index) {
                  case 0:
                    break;
                  case 1:
                    this.handleLinkClick(); 
                    this.getContent(0)
                    break;
                  /*
                  case 2:
                    this.handleLinkClick(); 
                    this.getContent(2)
                    break;
                  */
                  case 3:
                    break;
                  case 4:
                    this.handleLinkClick(); 
                    this.getContent(5)
                    break;
                  case 5:
                    this.handleLinkClick(); 
                    this.getContent(6)
                    break;
                  case 6:
                    this.handleLinkClick(); 
                    this.getContent(7)
                    break;
                  case 7:
                    this.handleLinkClick(); 
                    this.getContent(9)
                    break;
                  case 8:
                    this.handleLinkClick(); 
                    this.getContent(10)
                    break;
                  /*
                  case 9:
                    this.handleLinkClick(); 
                    this.getContent(11)
                    break;
                  case 10:
                    this.handleLinkClick(); 
                    this.getContent(12)
                    break;
                  */
                
                   default:
                    // code block
                }
              
              
              }}
            
            >{val}
          </MenuItem>)
      });

      const menuFr = ['MONTRÉAL','Carte', 'PROVINCE', 'Carte', 'Cas par jour', 'Cas par type', 'Tests', 'Québec vs. monde', 'Taux de variation']
      const menuItemsFr = menuFr.map((val,index)=>{
        return (
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            //onClick={()=>{this.handleLinkClick(); this.updateShared(index)}}
            onClick={()=>{
              switch(index) {
                case 0:
                break;
              case 1:
                this.handleLinkClick(); 
                this.getContent(0)
                break;
              /*
              case 2:
                this.handleLinkClick(); 
                this.getContent(2)
                break;
              */
              case 2:
                break;
              case 3:
                this.handleLinkClick(); 
                this.getContent(5)
                break;
              case 4:
                this.handleLinkClick(); 
                this.getContent(6)
                break;
              case 5:
                this.handleLinkClick(); 
                this.getContent(7)
                break;
              case 6:
                this.handleLinkClick(); 
                this.getContent(9)
                break;
              case 7:
                this.handleLinkClick(); 
                this.getContent(10)
                break;
              case 8:
                this.handleLinkClick(); 
                this.getContent(11)
                break;
              /*
              case 10:
                this.handleLinkClick(); 
                this.getContent(12)
                break;
              */
            
               default:
                // code block
              }
               
              
              }}
            
            >{val}
          </MenuItem>)
      });




      if(this.state.displayTranslate === 'Français') {
      return(
        
        <div>
          <div style={styles.container}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
            <div style={styles.logo}>
            <b>COVID-19 Quebec Dashboard</b>
            </div>
            <Button variant="contained" style={{'marginRight':'0%', 'backgroundColor': '#A8CBE5', 'color': '#293b4d', 'fontFamily': 'Nunito Sans',  'top ': '0','right' : '0','position': 'fixed'}}
                        onClick={() => this.getLang()}>
                        {this.state.displayTranslate}
                    </Button>
          </div>

          <Menu open={this.state.menuOpen}>
            {menuItemsEn}
          </Menu>

        </div>
      
      )
    } else
    {
      return(
      <div>
      <div style={styles.container}>
        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
        <div style={styles.logo}>
        <b>
                            Tableau de bord COVID-19 Québec  
        </b>                       
        </div>
        <Button variant="contained" style={{'marginRight':'0%', 'backgroundColor': '#A8CBE5', 'color': '#293b4d', 'fontFamily': 'Nunito Sans', 'top ': '0','right' : '0','position': 'fixed'}}
                    onClick={() => this.getLang()}>
                    {this.state.displayTranslate}
                </Button>
      </div>
      <Menu open={this.state.menuOpen}>
        {menuItemsFr}
      </Menu>

    </div>
      );
    }
  }
}
  
  NavBarMobile.protoTypes = {
    callback : PropTypes.func,
    langCallback : PropTypes.func

  }

  export default withStyles(useStyles)(NavBarMobile);
