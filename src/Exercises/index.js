import React, { Component }  from 'react'
import { Grid } from "@material-ui/core"
import Tableau1 from '../Tableau/Tableau1'
import Tableau2 from '../Tableau/Tableau2'
import Tableau3 from '../Tableau/Tableau3'
import Tableau4 from '../Tableau/Tableau4'
import Tableau5 from '../Tableau/Tableau5'
import Tableau6 from '../Tableau/Tableau6'
import Tableau7 from '../Tableau/Tableau7'
import Tableau8 from '../Tableau/Tableau8'
import { Paper } from "@material-ui/core"
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

const styles = {
        Paper: { padding: 30, marginTop: 20, marginBottom:30},
        h3:{ color:"#334B63", align:"center"    }
}


function FormRow1(props) {
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h3}>French: Map of Quebec’s administrative region </h1>
                <font size="3" color="#334B63" marginBottom="100">These two color-coded maps illustrate the number of confirmed cases in each of Quebec’s administrative regions. A darker shade of blue represents a higher number of cases. The left-most graphs depicts a map of the entire region of Quebec. The right-most graph zooms in to the southern regions of Quebec. You can see the exact number of cases in each region by clicking on the maps.
                <br></br><br></br><br></br> </font>

                <Divider variant="middle"/>
                <h1 style={styles.h3}>Map of Quebec’s administrative region </h1>
                <font size="3" color="#334B63" marginBottom="100"><br></br>These two color-coded maps illustrate the number of confirmed cases in each of Quebec’s administrative regions. A darker shade of blue represents a higher number of cases. The left-most graphs depicts a map of the entire region of Quebec. The right-most graph zooms in to the southern regions of Quebec. You can see the exact number of cases in each region by clicking on the maps. 
                <br></br><br></br> </font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau1/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau1/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  
}

function FormRow2(props) {
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={5}>
            <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
            <Paper style={styles.Paper} elevation={10}>
                <Tableau2/>
            </Paper>
        </Grid>
      </React.Fragment>
      );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
            <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
            <Paper style={styles.Paper} elevation={10}>
                <Tableau2/>
            </Paper>
        </Grid>
      </React.Fragment>
      );
  }
  
}

function FormRow3(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau3/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau3/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

function FormRow4(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau4/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau4/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

function FormRow5(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau5/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau5/>
            </Paper>
        </Grid>
      </React.Fragment>
      );
  }
}
function FormRow6(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau6/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau6/>
            </Paper>
        </Grid>
      </React.Fragment>
       );
  }
}
function FormRow7(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau7/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper} elevation={5}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={10}>
                <Tableau7/>
            </Paper>
        </Grid>
      </React.Fragment>
  );  
}
  
}
function FormRow8(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau8/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper} elevation={5}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={10}>
              <Tableau8/>
          </Paper>
      </Grid>
    </React.Fragment>
    );
  }
}

class Exercises extends Component {
   
  render() {
  return (
      <Grid container>
        <Grid container item xs={12} spacing={3} id="1">
            <FormRow1 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="2">
            <FormRow2 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="3">
            <FormRow3 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="4">
            <FormRow4 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="5">
            <FormRow5 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="6">
            <FormRow6 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="7">
            <FormRow7 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="8">
            <FormRow8 lang={this.props.lang}/>
        </Grid>
      </Grid>
  )
  }
}

Exercises.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.any,
};
export default Exercises;
