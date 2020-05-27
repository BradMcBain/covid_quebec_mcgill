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
// import VisibleItemList from '../containers/VisibleItemList'



// eslint-disable-next-line no-unused-vars
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
      marginLeft: '6%'
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

class NavBarMob extends Component {
    constructor(props) {
        super(props);
        this.state = {
           rowToShow: this.props.shared,
        }
    }


    componentDidUpdate(prevProps) {
        if(prevProps.shared !== this.props.shared) {
          this.setState({rowToShow: this.props.shared});
        }
    }

    //shouldComponentUpdate(nextProps, nextState) {
     //     return nextProps.lang !== this.props.lang || nextProps.shared !== this.props.shared //nextState !== this.state.rowToShow;
//
    //}

    jumpTo = (id) => {
            this.setState({rowToShow: id});
    }

    handleDrawerToggle = () => {
        this.setState({mobileOpen: !this.state.mobileOpen});
    }

    render() {
        console.log('hi')
        const {classes} = this.props;
        var drawer;
        if (this.props.lang === "en") {
         
            return (

                <div>
            
                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Exercises lang={this.props.lang} row={this.state.rowToShow}/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="my_container">
                            <h1 align="center"> Our Sponsors</h1>
                    
                    </div>
                    <Sponsors/>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                </main>
                </div>

            );
        } else {

            return (
                <div>
               
                
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Exercises lang={this.props.lang} row={this.state.rowToShow} />
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="my_container">
                            <h1 align="center"> Nos commanditaires</h1>
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

export default withStyles(useStyles)(NavBarMob);