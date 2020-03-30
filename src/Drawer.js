import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Exercises from './Exercises'
import Button from '@material-ui/core/Button';


function scrollToTargetAdjusted(el){
    var element = document.getElementById(el);
    var headerOffset = 70;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}

const useStyles = theme => ({
        root: {
          display: 'flex',
        },
        drawer: {
          [theme.breakpoints.up('sm')]: {
            width: '10%',
            flexShrink: 0,
          },
        },
        appBar: {
          [theme.breakpoints.up('sm')]: {
            width: `calc(100% - '10%')`,
            marginLeft: '10%',
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
          width: '10%',
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
            mobileOpen: false,
        }
    }
    
    getLang = () => {
        if (this.state.lang === "en"){
            this.setState({lang: "fr"});
        } else {
            this.setState({lang: "en"});
        }
    }  
    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    };

    jumpTo = (id) => {
        switch (id) {
            case 0:
                scrollToTargetAdjusted("1");
                break;
            case 1:
                scrollToTargetAdjusted("2");
                break;
            case 2:
                scrollToTargetAdjusted("3");
                break;
            case 3:
                scrollToTargetAdjusted("4");
                break;
            case 4:
                scrollToTargetAdjusted("5");
                break;
            case 5:
                scrollToTargetAdjusted("6");
                break;
            case 6:
                scrollToTargetAdjusted("7");
                break;
            case 7:
                scrollToTargetAdjusted("8");
                break;
            case 8:
                scrollToTargetAdjusted("9");
                break;
            default:
                break;
        }
        
    }

    drawer = (
        <div>
            <img src="./mcgilluni.ico" alt="" align="center" height="75px" width="100px" style={{'marginLeft': '18%', 'marginTop': '10%', 
            'display': 'block', 'margin-left': 'auto', 'margin-right': 'auto', 'width': '50%'}}/>
        <Divider />
        <List>
            {['Geographical Dashboard', 'New Cases', 'Case Types', 'Testing', 'Global Death Trends', 'Global Testing and Cases', 'Quebec Statistics 1', 'Quebec Statistics 2'].map((text, index) => (
            <ListItem button key={text} onClick={() => this.jumpTo(index)}>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        </div>
    );
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar} style={{'backgroundColor': '#334B63'}}>
                <Button variant="contained" style={{'marginLeft':'90%', 'backgroundColor': '#A8CBE5', 'color': 'black'}}
                    onClick={() => this.getLang()}>
                    {this.state.lang}
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
                    <Typography variant="h4" style={{'marginLeft':'10%', 'textAlign':'center', 'minWidth':'max-content', 'display': 'inline-block'}}>
                        COVID-19 Quebec Dashboard
                    </Typography>
                </div>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                <Drawer
                    container={this}
                    variant="temporary"
                    anchor='left'
                    open={this.mobileOpen}
                    onClose={this.handleDrawerToggle}
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {this.drawer}
                </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                    paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {this.drawer}
                </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Exercises lang={this.state.lang}/>
                
            </main>
            </div>
        );
    }
}


export default withStyles(useStyles)(ResponsiveDrawer);