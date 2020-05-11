import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import {
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import MMA from './mma_logo_en.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  media: {
    height: 140,
  },
}));

const styles = {
  Paper: { padding: 30, marginTop: 20, marginBottom: 30 },
  Welcome: {
    padding: 20,
    paddingTop: 4,
    marginTop: 20,
    marginBottom: 0,
    background: '#e3f3ff',
  },
  h3: { color: '#334B63', display: 'block', textAlign: 'center' },
};

function FormRowSponsor() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt=""
              height="130"
              image={MMA}
              title="Sponsor"
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
          <FormRowSponsor />
        </Grid>
      </Grid>
    );
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
