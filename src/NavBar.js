import React, {Component} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Exercises from './Exercises';
import Sponsors from './Sponsors';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
// import VisibleItemList from '../containers/VisibleItemList'



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
      marginTop: '3%',
      marginLeft: '12%'
    },
    first: {
        fontSize: '1rem',
        marginLeft: '16%',
        marginTop: '8%',
        color: '#334B63',
        fontWeight: 'bold',
        fontFamily:'Nunito Sans'
    },
    li: {
        fontSize: '0.9rem',
        color: '#334B63',
        fontWeight: 'normal',
        fontFamily:'Nunito Sans'
      },
});

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowToShow: 0
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.lang !== this.props.lang || nextState !== this.state.rowToShow;
    }
    jumpTo = (id) => {
            this.setState({rowToShow: id});
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    }

    render() {
        const {classes} = this.props;
        var drawer;
        if (this.props.lang === "en") {
            drawer = (<div>
             <img src="./covidlogo.ico" alt="" align="center" style={{ 'marginTop':'18%', 
            'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '90%', 'marginBottom':'18%'}}/>
                     <Divider />
                         <List className = {classes.first} >
                              MONTREAL
                         </List>
                         <List>
                             {['Map', 'Cases per day', 'CIUSSS', 'Age distribution', 'City mobility index'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
                                 <ListItemText primary={text} classes={{primary: classes.li}}/>
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
                     <Divider />
                         <List className = {classes.first} >
                              PROVINCE
                         </List>
                         <List>
                             {['Map', 'Cases per day', 'Cases per region', 'Cases per type', 'Age distribution', 'Tests', 'Quebec vs. the world', 'Daily rate changes', 'Death rate and days to double'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index + 5)}>
                                 <ListItemText primary={text} classes={{primary: classes.li}}/>
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
             </div>);
            return (

                <div>
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
                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Exercises lang={this.props.lang} row={this.state.rowToShow}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="my_container">
                            <h1 align="center">Our Sponsors</h1>
                    </div>
                    <Sponsors/>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </main>
                </div>

            );
        } else {
            drawer = (<div>
                <img src="./covidlogo.ico" alt="" align="center" style={{ 'marginTop':'18%', 
            'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '90%', 'marginBottom':'18%'}}/>
                     <Divider />
                         <List className = {classes.first} >
                            MONTRÉAL
                         </List>
                         <List>
                             {['Carte', 'Cas par jour', 'CIUSSS', 'Répartition par âge', 'Indice de mobilité urbaine'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
                                 <ListItemText primary={text} classes={{primary: classes.li}}/>
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
                     <Divider />
                        <List className = {classes.first} >
                             PROVINCE
                         </List>
                         <List>
                             {['Carte', 'Cas par jour', 'Cas par région', 'Cas par type', 'Répartition par âge', 'Tests', 'Québec vs. monde', 'Changements quotidiens des taux', 'Taux de mortalité et jours pour doubler'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index + 5)}>
                                 <ListItemText primary={text} classes={{primary: classes.li}}/>
                             </ListItem>
                             ))}
                         </List>
                     <Divider />
                    
             </div>);
            return (
                <div>
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
                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Exercises lang={this.props.lang} row={this.state.rowToShow}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="my_container">
                            <h1 align="center">Nos commanditaires</h1>
                    </div>
                    <Sponsors/>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </main>
                </div>


            );
        }
        
    }
}

export default withStyles(useStyles)(NavBar);