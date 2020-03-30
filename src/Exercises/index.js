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



const styles = {
        Paper: { padding: 40, marginTop: 20, marginBottom:30 }
}

function FormRow1(props) {
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
                <Tableau1/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
            <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
            <Paper style={styles.Paper}>
                <Tableau2/>
            </Paper>
        </Grid>
      </React.Fragment>
      );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
            <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
            <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau3/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau4/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau5/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau6/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau7/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5}>
             <Paper style={styles.Paper}>
                Left pane
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper}>
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
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
              <Tableau8/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
      <Grid item xs={5}>
           <Paper style={styles.Paper}>
              Left pane
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper}>
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
