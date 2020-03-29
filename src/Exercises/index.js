import React from 'react'
import { Grid } from "@material-ui/core"
import LeftPane from './LeftPane'
import RightPane from './RightPane'

const styles = {
        Paper: { padding: 20, marginTop: 10, marginBott:10 }
}
function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6}>
             <LeftPane styles={styles}/>
        </Grid>
        <Grid item xs={6}>
            <RightPane styles={styles}/>
        </Grid>
      </React.Fragment>
    );
  }
export default props =>
<Grid container>
    <Grid container item xs={12} spacing={12}>
        <FormRow />
    </Grid>
    <Grid container item xs={12} spacing={12}>
        <FormRow />
    </Grid>
</Grid>