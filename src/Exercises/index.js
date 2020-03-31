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
import Tableau9 from '../Tableau/Tableau9'
import TableauMontreal from '../Tableau/TableauMontreal'

import { Paper, Card } from "@material-ui/core"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';


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
  media: {
      height: 140,
    }
  },
}));

const styles = {
        Paper: { padding: 30, marginTop: 20, marginBottom:30},
        Welcome: {padding: 20, paddingTop: 4, marginTop: 20, marginBottom:0, background:"#e3f3ff"},
        h3:{ color:"#334B63", display:"block", textAlign:"center"}
}

function FormRow0(props){
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12}>
             <Paper style={styles.Welcome}  elevation={10}>
             <h1 style={styles.h3}>Welcome</h1>
             <font size="3" color="#334B63" margin-bottom="100">Quebecers are not only enduring the COVID-19 pandemic, but also experiencing an avalanche of misinformation. To disseminate accurate data, McGill University members decided to work together to design an infographic data dashboard that relies solely on official government figures.<br></br><br></br> 

              
              We are a group of professors, data science & software engineering students striving to raise awareness about the spread of the pandemic in our province. This information will be updated daily. If you wish to help, please contact us at <b>info@covidqc.com</b>. 
           </font>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12}>
              <Paper style={styles.Welcome} elevation={10}>
              <h1 style={styles.h3}>Message d’accueil</h1>
              <font size="3" color="#334B63" margin-bottom="100">Les Québecois subissent non seulement la pandémie du COVID-19, mais font également face à une avalanche de désinformation. Pour diffuser des données précises; les membres de l’université de McGill ont décider de travailler ensemble pour convevoir un tableau de bord de données infographiques, qui repose uniquement sur les chiffres officiels du gouvernement.  

              <br></br><br></br>Nous sommes un groupe de professeurs, étudiants en science des données et en génie logiciel qui s’efforcent de sensibiliser à la propagation de la pandémie dans notre province. Ces informations seront mises à jour quotidiennement. Si vous souhaitez aider, veuillez nous contacter à <b>info@covidqc.com</b>. 
              </font>
              </Paper>
        </Grid>
      </React.Fragment>
    );
  }
}

function FormRow1(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h3}>Map of Quebec’s administrative regions</h1>
                <font size="4" color="#334B63" margin-bottom="100">These two color-coded maps illustrate the number of confirmed cases in each of Quebec’s administrative regions. A darker shade of blue represents a higher number of cases. The left-most graphs depicts a map of Quebec. The right-most graph zooms in to the southern regions of Quebec. You can see the exact number of cases, in each region, by clicking on the maps. 
                </font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
                <Tableau1/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Carte de la région administrative du Québec</h1>
              <font size="4" color="#334B63" margin-bottom="100">
                Ces deux cartes à code couleur illustrent le nombre de cas confirmés dans chacune des régions administratives du Québec. Une teinte de bleu foncée représente un nombre plus élevé de cas. Les graphiques de gauche représentent une carte du Québec. Le graphique à l'extrème droite fait un zoom sur les régions du sud du Québec. Vous pouvez voir le nombre exact de cas, par région, en cliquant sur les cartes. 
              </font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
                <Tableau1/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  }
  
}
function FormRowTemp(props) {
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h3}>Montreal Neighbourhoods</h1>
                <font size="4" color="#334B63" margin-bottom="100">This map shows the number of confirmed cases in each montreal borough. You can click on the map to see the exact number of cases in each neighbourhood.
                </font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
                <TableauMontreal/>
            </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Arrondissements de Montréal</h1>
              <font size="4" color="#334B63" margin-bottom="100">Cette carte montre le nombre de cas confirmés dans chacun des arrondissements de Montréal. Vous pouvez cliquer sur la carte pour voir le nombre exact de cas dans chaque quartier.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
              <TableauMontreal/>
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
        <Grid item xs={12}>
            <Paper style={styles.Paper} elevation={5}>
                <Tableau2/>
            </Paper>
        </Grid>
      </React.Fragment>
      );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12}>
            <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Cases per day</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This stacked bar chart depicts the number of daily new cases in each region. To highlight a specific region, you can click on the graph.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau3/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Cas par jour</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Ce graphique à barres empilées illustre le nombre de nouveaux cas quotidiens dans chaque région. Pour choisir une région spécifique, vous pouvez cliquer sur le graphique.</font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Cases by Type</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This exhibit plots four trends: total cases, hospitalized cases, cases under intensive care, and deaths.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau4/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Cas par type</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Cette exposition trace quatres tendances: nombre total de cas, cas hospitalisés, cas sous soins intensifs et décès.</font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Testing rates</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This graph depicts the daily number of positive tests (confirmed cases), negative tests, and tests under investigation. Tests under investigation will eventually become positive or negative.</font>
           </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau5/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Taux de tests</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Ce graphique illustre le nombre quotidien de tests positifs (cas confirmés), de tests négatifs et de tests sous enquête. Les tests sous enquête deviendront éventuellement positifs ou négatifs.</font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Number of deaths: Quebec vs. The world</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This shows the trajectory in the number of cases in Quebec, relative to other countries. In the x-axis, we plot the number of days since the total number of deaths, in each region, reached five. In the y-axis, we plot the total number of deaths. The straight grey lines show trajectories for a doubling time of 2 days, 3 days, 5 days and 10 days. If a country’s line on the chart is higher than those lines, then its number of deaths is doubling faster than that.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau6/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Nombre de décès: Québec vs. Monde</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Cela montre la trajectoire du nombre de cas au Québec, par rapport aux autres pays. Dans l'axe des abscisses (x), nous indiquons le nombre de jours depuis que le nombre total de décès a atteint cinq décès par région. Sur l'axe des ordonnées (y), nous indiquons le nombre total de décès. Les lignes droites grises indiquent les trajectoires pour un temps de doublement de 2 jours, 3 jours, 5 jours et 10 jours. Si la ligne d'un pays sur le graphique est plus haute que ces lignes, alors son nombre de décès double plus vite que cela.</font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Testing rates: Quebec vs. The world</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This scatterplot illustrates how Quebec compares to the rest of Canada (and other countries), in terms of testing rates and number of cases. In the y axis, we test rate (number of tests per 100k inhabitants). In the x axis, we plot the number of cases. 
              <br></br><br></br>Ideally, we want regions to perform highly in terms of test rates, while having a low number of cases. That is, in an ideal scenario, regions should be in the upper-left region of the plot. You can click on the map to highlight a specific region.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau7/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Taux de tests: Québec vs. Monde</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Ce nuage de points illustre comment le Québec se compare au reste du Canada (et d’autres pays), en termes de taux de dépistage et de nombre de cas. Sur l’axe des ordonnées (y), nous testons le taux (nombre de tests pour 100 000 habitants). Sur l’axe des abscisses, nous traçons le nombre de cas. 
              <br></br><br></br>Idéalement, nous souhaitons que les régions soient très performantes en termes de taux de test, tout en ayant un faible nombre de cas. Autrement dit, dans un scénario idéal, les régions devraient se trouver dans la région supérieure gauche du graphique. Vous pouvez cliquer sur la carte pour choisir une région spécifique.</font>
            </Paper>
        </Grid>
        <Grid item xs={7}>
             <Paper style={styles.Paper} elevation={5}>
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
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Daily rate changes</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This exhibit illustrates the daily percentage increase in cases, deaths, and hospitalizations.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau8/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Changements quotidiens des taux</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Cette pièce illustre l'augmentation quotidienne en pourcentage des cas, des décès et des hospitalisations.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau8/>
          </Paper>
      </Grid>
    </React.Fragment>
    );
  }
}
function FormRow9(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Death rate and  days to double</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              This exhibit shows three statistics. In the left-most column depicts the death rate (deaths/ confirmed cases) in Quebec. The middle and right-most columns depict how long it has taken for the number of case to double, as a function of time. The higher these figures are, the slower the disease is spreading.
              <br></br><br></br>Note: To calculate “days to double.” we use the following formula: ln(2)/ln(1+r), where r is the 3-day increase rate  smoothed average.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau9/>
          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={5} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Taux de mortalité et jours pour doubler</h1>
              <font size="4" color="#334B63" margin-bottom="100">
              Cette exposition présente trois statistiques. La colonne de gauche représente le taux de mortalité (décès / cas confirmés) au Québec. Les colonnes du milieu et de la droite indiquent le temps qu'il a fallu pour que le nombre de cas double, en fonction du temps. Plus ces chiffres sont élevés, plus la maladie se propage lentement.</font>
          </Paper>
      </Grid>
      <Grid item xs={7}>
           <Paper style={styles.Paper} elevation={5}>
              <Tableau9/>
          </Paper>
      </Grid>
    </React.Fragment>
    );
  }
}

class Exercises extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.lang !== this.props.lang;
  }
  render() {
  return (
    
      <Grid container>
        <Grid container item xs={12} spacing={3} id="0">
            <FormRow0 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="1">
            <FormRow1 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="2">
            <FormRowTemp lang={this.props.lang}/>
        </Grid>
        {/* <Grid container item xs={12} spacing={3} id="3">
            <FormRow2 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="4">
            <FormRow3 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="5">
            <FormRow4 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="6">
            <FormRow5 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="7">
            <FormRow6 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="8">
            <FormRow7 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="9">
            <FormRow8 lang={this.props.lang}/>
        </Grid>
        <Grid container item xs={12} spacing={3} id="10">
            <FormRow9 lang={this.props.lang}/>
        </Grid> */}
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
