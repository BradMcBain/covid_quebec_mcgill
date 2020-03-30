import React from 'react';
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
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Exercises from './Exercises'
import Button from '@material-ui/core/Button';


const drawerWidth = '10%';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
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
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [lang, setLang] = React.useState("en");
    const getLang = () => {
        if (lang === "en"){
          // t.state.lang = "fr";
          setLang("fr");
        } else {
          // t.state.lang = "en";
          setLang("en");
        }
    }  
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const jumpTo = (id) => {
        switch (id) {
            case 0:
                
                document.getElementById("1").scrollIntoView({behavior: 'smooth' });
                
                //window.location.href = "#first";
                break;
            case 1:
                document.getElementById("2").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#second";
                break;
            case 2:
                document.getElementById("3").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#third";
                break;
            case 3:
                document.getElementById("4").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#fourth";
                break;
            case 4:
                document.getElementById("5").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#fifth";
                break;
            case 5:
                document.getElementById("6").scrollIntoView({ behavior: 'smooth' });
               // window.location.href = "#sixth";
                break;
            case 6:
                document.getElementById("7").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#seventh";
                break;
            case 7:
                document.getElementById("8").scrollIntoView({ behavior: 'smooth' });
                //window.location.href = "#eighth";
                break;
            default:
                break;
        }
        
    }

    const drawer = (
        <div>
            <img src="./mcgilllogo.ico" alt="" height="50px" width="50px" style={{'marginLeft': '30%', 'marginTop': '10%'}}/>
        <Divider />
        <List>
            {['Geographical Dashboard', 'New Cases', 'Case Types', 'Testing', 'Global Death Trends', 'Global Testing and Cases', 'Quebec Statistics 1', 'Quebec Statistics 2'].map((text, index) => (
            <ListItem button key={text} onClick={() => jumpTo(index)}>
                <ListItemText primary={text} />
            </ListItem>
            ))}
        </List>
        <Divider />
        </div>
    );

    return (
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} style={{'backgroundColor': '#334B63'}}>
            <Button variant="contained" style={{'marginLeft':'90%', 'backgroundColor': '#A8CBE5', 'color': 'black'}}
                onClick={() => getLang()}>
                {lang}
            </Button>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
            </IconButton>
            <Typography variant="h6" noWrap>
                COVID-19 Quebec Dashboard
            </Typography>
            </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
            <Drawer
                container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
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
            <Exercises/>
            
        </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};

export default ResponsiveDrawer;