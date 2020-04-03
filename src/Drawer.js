import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar'

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
        },
        menuButton: {
          marginRight: theme.spacing(2),
          [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
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
});

class ResponsiveDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: "en",
            displayTranslate: "French",
            mobileOpen: false,
        }
    }

    shouldComponentUpdate(newProps, newState) {
        // only render if the state has changed
        return this.state.lang !== newState.lang;
    }
    
    getLang = () => {
        if (this.state.lang === "en"){
            this.setState({lang: "fr"});
            this.setState({displayTranslate: "English"});
        } else {
            this.setState({lang: "en"});
            this.setState({displayTranslate: "Français"});
        }
    }  
    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    
    render(){
        
        const {classes} = this.props;
        if (this.state.lang === "en") {
            return (
                <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} style={{'backgroundColor': '#334B63'}}>
                    <Button variant="contained" style={{'marginLeft':'80%', 'backgroundColor': '#A8CBE5', 'color': '#293b4d'}}
                        onClick={() => this.getLang()}>
                        {this.state.displayTranslate}
                    </Button>
    
                    <Toolbar style={{'alignSelf':'center'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                    </IconButton>

                    <div style={{'display': 'inherit'}}>
                        <Typography variant="h4" style={{'marginLeft':'25%', 'textAlign':'center', 'minWidth':'max-content', 'display': 'inline-block'}}>
                            COVID-19 Quebec Dashboard
                        </Typography>
                    </div>
                    </Toolbar>
                </AppBar>
                <NavBar lang={this.state.lang}/>
                
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar} style={{'backgroundColor': '#334B63'}}>
                        <Button variant="contained" color="primary" style={{'marginLeft':'80%', 'backgroundColor': '#A8CBE5', 'color': '#293b4d'}}
                            onClick={() => this.getLang()}>
                            {this.state.displayTranslate}
                        </Button>
                    
    
                    <Toolbar style={{'alignSelf':'center'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={this.handleDrawerToggle}
                        className={classes.menuButton}
                    >
                    </IconButton>
                   
                    <div style={{'display': 'inherit'}}>
                        <Typography variant="h4" style={{'marginLeft':'25%', 'textAlign':'center', 'minWidth':'max-content', 'display': 'inline-block'}}>
                            Tableau de bord COVID-19 Québec
                        </Typography>
                    </div>
                    </Toolbar>
                </AppBar>
                <NavBar lang={this.state.lang}/>
                
                </div>
            );
        }
        
    }
}


export default withStyles(useStyles)(ResponsiveDrawer);