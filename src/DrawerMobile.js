import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles, StylesProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import NavBarMob from './NavBarMob'



const useStyles = theme => ({
        root: {
          display: 'flex',
        },
        drawer: {
          [theme.breakpoints.up('sm')]: {
            width: '12%',
            flexShrink: 0,
          },
        },
        appBar: {
          [theme.breakpoints.up('sm')]: {
            width: `calc(100% - '12%')`,
            marginLeft: '12%',
          },
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '50px'
        },
        menuButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
        },
        closeMenuButton: {
          marginRight: 'auto',
          marginLeft: 0,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        drawerPaper: {
          width: '12%',
        },
        content: {
          flexGrow: 1,
          padding: theme.spacing(3),
        },
        navBarMobile: {
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            height: '100vh',
          }
});

class ResponsiveDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "en",
            displayTranslate: "Français",
            mobileOpen: false,
            shared_rowToShow: 0,
        }
    }

    updateShared(id) {
        this.setState({shared_rowToShow: id});
        console.log('updateShared')
    }
    


   // shouldComponentUpdate(newProps, newState) {
        // only render if the state has changed
    //    return this.state.lang !== newState.lang || this.state.shared_rowToShow !== newState.shared_rowToShow;
   // }
    
    updateLang(language) {
        this.setState({lang: language});
        console.log(this.state.lang)
    }  
    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    }

    
    render(){
        const {classes} = this.props;
            return (
                
                <div className={classes.root}>
                <NavBarMob lang={this.state.lang} shared={this.state.shared_rowToShow}  />
                <CssBaseline />
                <div position="fixed">
                <NavBarMobile className={classes.appBar} style={{'backgroundColor': '#334B63'}}  callback={this.updateShared.bind(this)} langCallback={this.updateLang.bind(this)}></NavBarMobile>
                </div>         
        
                </div>

            );
        
        
    }
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};

export default withStyles(useStyles)(ResponsiveDrawer);