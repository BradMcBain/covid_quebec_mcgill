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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: '12%',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    li: {
        fontSize: '0.9rem',
        color: '#334B63',
        fontWeight: 'bold'
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

    render() {
        const {classes} = this.props;
        var drawer;
        if (this.props.lang === "en") {
            drawer = (<div>
                <img src="./qc.ico" alt="" align="center" style={{ 'marginTop':'5%', 
            'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '60%'}}/>
                     <Divider />
                         <List>
                             {['Map of Quebec’s administrative regions', 'Montreal neighbourhoods', 'Total cases per region', 'Cases per day', 'Cases by type', 'Testing rates', 'Number of deaths: Quebec vs. The world', 'Testing rates: Quebec vs. The world', 'Daily rate changes', 'Death rate and days to double'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
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
                <div className={classes.appBar} />
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
                <img src="./qc.ico" alt="" align="center" style={{ 'marginTop':'5%', 
            'display': 'block', 'marginLeft': 'auto', 'marginRight': 'auto', 'width': '60%'}}/>
                     <Divider />
                         <List>
                             {['Carte de la région administrative du Québec', 'Arrondissements de Montréal','Cas par région', 'Cas par jour', 'Cas par type', 'Taux de tests', 'Nombre de décès: Québec vs. Monde', 'Taux de tests: Québec vs. Monde', 'Changements quotidiens des taux', 'Taux de mortalité et jours pour doubler'].map((text, index) => (
                             <ListItem button key={text} onClick={() => this.jumpTo(index)}>
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