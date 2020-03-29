import React from 'react'
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

const styles = {
        Paper: { padding: 40, marginTop: 20, marginBottom:30 }
}
function FormRow1() {
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

  function FormRow2() {
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

  function FormRow3() {
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

  function FormRow4() {
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

  function FormRow5() {
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
  function FormRow6() {
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
  function FormRow7() {
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
  function FormRow8() {
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

export default props =>
<Grid container>
    <Grid container item xs={12} spacing={3} id="first">
        <FormRow1 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="second">
        <FormRow2 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="third">
        <FormRow3 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="fourth">
        <FormRow4 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="fifth">
        <FormRow5 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="sixth">
        <FormRow6 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="seventh">
        <FormRow7 />
    </Grid>
    <Grid container item xs={12} spacing={3} id="eighth">
        <FormRow8 />
    </Grid>
</Grid>