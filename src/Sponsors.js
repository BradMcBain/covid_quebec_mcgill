import React, { Component }  from 'react'
import { Grid } from "@material-ui/core"
import { Card, CardActionArea, CardMedia } from "@material-ui/core"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 400,
   // backgroundColor: theme.palette.background.paper,
  },
  media: {
      height: 2,
      paddingTop: '15%', // 16:9
    }

}));

function FormRowSponsor(){
  const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={12} container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center">
            <Card className={classes.root}>
                <CardActionArea href="https://www.mcgill.ca/desautels/programs/mma" target="_blank" rel="noopener noreferrer">
                    <CardMedia
                    className={classes.media}
                    image="./mma_logo_en.jpg"
                    title="MMA logo"
                    />
                </CardActionArea>

            </Card>
        </Grid>
      </React.Fragment>
    );
}


class Exercises extends Component {
  
  render() {
  return (
    
      <Grid container>
        <Grid container item xs={12} spacing={0} id="sponsor">
            <FormRowSponsor/>
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