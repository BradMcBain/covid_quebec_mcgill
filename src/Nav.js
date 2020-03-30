import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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

class Nav extends Component {
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

    render() {
        const {classes} = this.props;
        var drawer;
        if (this.props.lang === "en") {
            drawer = (<div>
                <img src="./mcgilluni.ico" alt="" align="center" style={{ 'marginTop': '10%', 
                 'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '50%'}}/>
                     <Divider />
                         <List>
                             {['Geographical Dashboard', 'New Cases', 'Case Types', 'Testing', 'Global Death Trends', 'Global Testing and Cases', 'Quebec Statistics 1', 'Quebec Statistics 2'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
                                 <ListItemText primary={text} />
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
             </div>);
            return (
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                    <Drawer
                        lang={this.props.lang}
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
                        {drawer}
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
                        {drawer}
                    </Drawer>
                    </Hidden>
                </nav>
            );
        } else {
            drawer = (<div>
                <img src="./mcgilluni.ico" alt="" align="center" style={{ 'marginTop': '10%', 
                 'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '50%'}}/>
                     <Divider />
                         <List>
                             {['C Dashboard', 'C Cases', 'C Types', 'C', 'Global Death Trends', 'Global Testing and Cases', 'Quebec Statistics 1', 'Quebec Statistics 2'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
                                 <ListItemText primary={text} />
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
             </div>);
            return (
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                    <Drawer
                        lang={this.props.lang}
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
                        {drawer}
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
                        {drawer}
                    </Drawer>
                    </Hidden>
                </nav>
            );
        }
        
    }
}

export default withStyles(useStyles)(Nav);