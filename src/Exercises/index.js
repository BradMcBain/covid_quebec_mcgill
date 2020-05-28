/* eslint-disable no-unused-vars */
import React, { Component }  from 'react'
import { Grid } from "@material-ui/core"

import { Paper } from "@material-ui/core"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

//import TableauCityMobility from '../Tableau/TableauCityMobility';
//import TableauProvinceAgeDist from '../Tableau/TableauProvinceAgeDist';
//import TableauMontrealAgeDist from '../Tableau/TableauMontrealAgeDist';

const Tableau1 = React.lazy(()=> import('../Tableau/Tableau1'))
const Tableau2 = React.lazy(()=> import('../Tableau/Tableau2'))
const Tableau3 = React.lazy(()=> import('../Tableau/Tableau3'))
const Tableau4 = React.lazy(()=> import('../Tableau/Tableau4'))
const Tableau5 = React.lazy(()=> import('../Tableau/Tableau5'))
const Tableau6 = React.lazy(()=> import('../Tableau/Tableau6'))
const Tableau7 = React.lazy(()=> import('../Tableau/Tableau7'))
const Tableau8 = React.lazy(()=> import('../Tableau/Tableau8'))
const Tableau9 = React.lazy(()=> import('../Tableau/Tableau9'))
const Tableau10 = React.lazy(()=> import('../Tableau/Tableau10'))
const Tableau11 = React.lazy(()=> import('../Tableau/Tableau11'))
const TableauAgePie = React.lazy(()=> import('../Tableau/TableauAgePie'))
const TableauCIUSSSTrend = React.lazy(()=> import('../Tableau/TableauCIUSSSTrend'))
const TableauProvinceAgeDist = React.lazy(()=> import('../Tableau/TableauProvinceAgeDist'))
const TableauMontrealAgeDist = React.lazy(()=> import('../Tableau/TableauMontrealAgeDist'))
const TableauCityMobility = React.lazy(()=> import('../Tableau/TableauCityMobility'))
const TableauMontrealUpdated = React.lazy(()=> import ('../Tableau/TableauMontrealUpdated'))

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
  Paper: { 
    padding: 10, 
    marginTop: 20, 
    marginBottom: 30, 
    width: "98.3%"
  },
  Welcome: {
    padding: 20,
    paddingTop: 4,
    marginTop: 20,
    marginBottom: 0,
    background: "#e3f3ff",
  },
  h3: {
    color: "#334B63",
    display: "block",
    textAlign: "center",
    fontFamily: "Nunito Sans",
    fontSize: "28px",
  },
  h2: {
    color: "#334B63",
    display: "block",
    textAlign: "center",
    fontFamily: "Nunito Sans",
    fontSize: "24px",
  },
  description: {
    fontSize: "18px",
    color: "334B63",
    marginBottom: "100",
    fontFamily: "Nunito Sans",
  },
  description2: {
    fontSize: "17.99px",
    color: "334B63",
    marginBottom: "100",
    fontFamily: "Nunito Sans",
  },
  description3: {
    fontSize: "17.9px",
    color: "334B63",
    marginBottom: "100",
    fontFamily: "Nunito Sans",
  },
  source: {
    display: "flex",
    textAlign: "left",
    color: "#334B63",
    //marginLeft: 12,
    //marginRight: 12,
    marginBottom: 100,
    fontFamily: "Nunito Sans",
  },
  sourceLink: {
    display: "flex",
    textAlign: "left",
    color: "#334B63",
    //marginLeft: 12,
    //marginRight: 12,
    fontFamily: "Nunito Sans",
    wordBreak: 'break-all'
  },
  frags: {},
};


function FormRow0(props){
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment >
        <Grid item xs={12}>
             <Paper style={styles.Welcome}  elevation={10}>
             <h1 style={styles.h3}>Welcome</h1>
             <font style={styles.description}>Quebecers are not only enduring the COVID-19 pandemic, but also experiencing an avalanche of misinformation. To disseminate accurate data, McGill University members decided to work together to design an infographic data dashboard that relies solely on official government figures.<br></br><br></br> 

              
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
              <font style={styles.description}>Les Québecois subissent non seulement la pandémie du COVID-19, mais font également face à une avalanche de désinformation. Pour diffuser des données précises; les membres de l’université de McGill ont décider de travailler ensemble pour convevoir un tableau de bord de données infographiques, qui repose uniquement sur les chiffres officiels du gouvernement.  

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
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Québec Health Regions</h1>
                 <font style={styles.description}>This dashboard displays information about the number of cases and the evolution over time of confirmed cases in each Quebec health regions. 
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <Tableau1/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Régions sociosanitaires du Québec</h1>
              <font style={styles.description}>
              Ce tableau de bord affiche de l'information sur le nombre de cas au coronavirus dans chaque région sociosanitaire du Québec et sur leur évolution au fil du temps. 
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau1/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}


function FormRowCIUSSS(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Cases by CIUSSS</h1>
                <font style={styles.description}>The exhibit shows the number of cases in each Integrated University Health and Social Services Centre (CIUSS).

                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <Tableau10/>
                  </React.Suspense>

              </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Cas par CIUSSS</h1>
              <font style={styles.description}>
              Cette exposition montre le nombre total de cas, dans chaque Centre intégré universitaire de santé et de services sociaux (CIUSSS)
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau10/>
                </React.Suspense>

            </Paper>

        </Grid>
      </React.Fragment>
    );
  }
}

function FormRowCIUSSSTrend(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Cases by CIUSSS</h1>
                <font style={styles.description}>This graph depicts the trend in the daily number of confirmed cases by Integrated University Health and Social Services Centre (CIUSSS).  <br></br><br></br>
                </font>
                <font style={styles.description2}>
                The second exhibit shows the number of cases in each Integrated University Health and Social Services Centre (CIUSSS).
                </font>
                
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <TableauCIUSSSTrend/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank" rel="noopener noreferrer">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Cas par CIUSSS</h1>
              <font style={styles.description}>
              Ce graphique illustre la tendance du nombre quotidien de cas confirmés par Centre intégré universitaire de santé et de services sociaux (CIUSSS).<br></br><br></br> 
                </font>
                <font style={styles.description2}>
                La deuxième exposition montre le nombre total de cas, dans chaque Centre intégré universitaire de santé et de services sociaux (CIUSSS).
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <TableauCIUSSSTrend/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19/" target="_blank" rel="noopener noreferrer">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  }
  
}

function FormRowCityMobility(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>City Mobility Index — Citymapper</h1>
                 <font style={styles.description}>This exhibit shows the number of planned trips in the citymapper mobile app, relative to a typical usage period (i.e., 4 weeks between January 6 and February 2, 2020). The citymapper Mobility Index is used for public transport users, and for walking, cycling, and micromobility and cabs. It does not track driving in private vehicles.
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <TableauCityMobility/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://citymapper.com/cmi/" target="_blank" rel="noopener noreferrer">https://citymapper.com/cmi/</a> (Permission Granted by Citymapper)
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Indice de mobilité urbaine - Citymapper</h1>
              <font style={styles.description}>
              Cette exposition montre le nombre de voyages prévus dans l'application mobile citymapper, par rapport à une période d'utilisation typique (c-à-d. 4 semaines entre le 6 janvier et le 2 février 2020). L'indice de mobilité citymapper est utilisé pour les utilisateurs des transports publics, ainsi que pour la marche, le vélo, la micro-mobilité et les taxis. L'indice ne considère pas la conduite dans les véhicules privés.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <TableauCityMobility/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://citymapper.com/cmi/" target="_blank" rel="noopener noreferrer">https://citymapper.com/cmi/</a> (Permission accordée par Citymapper)
              </font>
      </React.Fragment>
    );
  }
}

function FormRowProvinceAgeDist(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Province — Age distribution</h1>
                 <font style={styles.description}>This exhibit shows how the percentage of infected cases evolves across each age group in the province of Quebec
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <TableauProvinceAgeDist/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a> 
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Québec - Répartition par âge</h1>
              <font style={styles.description}>
               Cette exposition montre comment le pourcentage de cas infectés évolue dans chaque groupe d'âge dans la province.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <TableauProvinceAgeDist/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}

function FormRowMontrealAgeDist(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Montreal — Age distribution</h1>
                 <font style={styles.description}>This exhibit shows how the percentage of infected cases evolves across each age group in the province of Quebec
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <TableauMontrealAgeDist/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a> 
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Montréal - Répartition par âge</h1>
              <font style={styles.description}>
               Cette exposition montre comment le pourcentage de cas infectés évolue dans chaque groupe d'âge dans la province.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <TableauMontrealAgeDist/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}

function FormRowAgePie(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Cases by age group</h1>
                <font style={styles.description}>This pie chart shows the distribution of confirmed cases by age group.

                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <TableauAgePie/>
                  </React.Suspense>

              </Paper>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Cas par groupe d’âge</h1>
              <font style={styles.description}>
              Ce diagramme circulaire illustre la répartition des cas confirmés par groupe d’âge.</font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <TableauAgePie/>
                </React.Suspense>

            </Paper>

        </Grid>
      </React.Fragment>
    );
  }
  
}



function FormRowMontrealCases(props) {
  
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Cases per day — Montreal</h1>
                <font style={styles.description}>
                This stacked bar chart depicts the number of daily new cases in each Montreal borough. To highlight a specific borough, you can click on the graph.<br></br><br></br> 
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

              <Paper style={styles.Paper} elevation={5}>
              <React.Suspense fallback={<div>loading ..</div>}>

                  <Tableau11/>
                  </React.Suspense>

              </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
        </font>
                <br></br>
        <font style={styles.source}>
                Note: The City of Montreal reported borough-level cases for April 20 and April 21 jointly. We interpolated these cases proportionally across these two days in each borough, using an arithmetic approximation, but we don't have the exact figures.
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Cas par jour — Montréal</h1>
              <font style={styles.description}>
              Ce graphique à barres empilées illustre le nombre de nouveaux cas journaliers dans chaque arrondissement de Montréal. Pour sélectionner un arrondissement en particulier, vous pouvez cliquer sur le graphique.<br></br><br></br>
              </font>
              </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau11/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
               Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19/" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
        </font>
              <br></br>
         <font style={styles.source}>
              Remarque: La Ville de Montréal a déclaré conjointement les cas par arrondissement pour le 20 et 21 avril. Nous avons interpolé ces cas proportionnellement sur ces deux jours dans chaque arrondissement, en utilisant une approximation arithmétique, mais nous n'avons pas les chiffres exacts.
        </font>
      </React.Fragment>
    );
  }
  
}



function FormRowTemp(props) {
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h2}>Montreal Neighbourhoods</h1>
                <font style={styles.description}>This dashboard displays information about the number of cases and the evolution over time of confirmed cases in each Montreal borough. 
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>


                <TableauMontrealUpdated/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank" rel="noopener noreferrer">https://santemontreal.qc.ca/population/coronavirus-covid-19</a>
              </font>
   
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Arrondissements de Montréal</h1>
              <font style={styles.description}>Ce tableau de bord affiche de l'information sur le nombre de cas au coronavirus dans chaque arrondissement de Montréal et sur leur évolution au fil du temps.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

              <TableauMontrealUpdated/>
              </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://santemontreal.qc.ca/population/coronavirus-covid-19" target="_blank" rel="noopener noreferrer">https://santemontreal.qc.ca/population/coronavirus-covid-19</a>
              </font>
      </React.Fragment>
    );
  }
  
}

function FormRow2(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Total cases per region</h1>
              <font style={styles.description}>
              This data matrix illustrates  the number of cases in each region, each day. </font>
          </Paper>
      </Grid>
      <Grid item xs={12}>

           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau2/>
              </React.Suspense>

          </Paper>

      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Nombre total de cas par région</h1>
              <font style={styles.description}>
              Cette matrice de données illustre le nombre de cas quotidien dans chaque région. </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau2/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}

function FormRow3(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Cases per day — Regions of Quebec</h1>
              <font style={styles.description}>
              This stacked bar chart depicts the number of daily new cases in each region. To highlight a specific region, you can click on the graph.
              </font>
          </Paper>
      </Grid>
      <Grid item xs={12}>

           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau3/>
              </React.Suspense>

          </Paper>

      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Cas par jour — régions du Québec</h1>
              <font style={styles.description}>
              Ce graphique à barres empilées illustre le nombre de nouveaux cas quotidiens dans chaque région. Pour choisir une région spécifique, vous pouvez cliquer sur le graphique.</font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau3/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}

function FormRow4(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Cases per Type</h1>
              <font style={styles.description}>
              This stacked bar chart depicts the cumulative number of total cases by type deaths, recovered, active (but non-hospitalized), active and hospitalized, and those in intensive care. The trend line represents the number of active cases, where active cases = (non hospitalized )+ (hospitalized)+ (intensive care)
              </font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau4/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Sources: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Cas par type</h1>
              <font style={styles.description}>
              Ce graphique à barres empilées illustre le nombre cumulatif de cas par type décès, récupérés, actifs (mais non hospitalisés), actifs et hospitalisés, et ceux en soins intensifs. La ligne de tendance représente le nombre de cas actifs. Note: cas actifs = (non hospitalisés) + (hospitalisés) + (soins intensifs)
             </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>
             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau4/>
                </React.Suspense>

            </Paper>
        </Grid>
        <font style={styles.source}>
              Sources: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
    );
  }
}

function FormRow5(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Testing rates</h1>
              <font style={styles.description}>
              This graph depicts the daily number of positive tests (confirmed cases), negative tests, and tests under investigation. Tests under investigation will eventually become positive or negative.</font>
           </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau5/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Taux de tests</h1>
              <font style={styles.description}>
              Ce graphique illustre le nombre quotidien de tests positifs (cas confirmés), de tests négatifs et de tests sous enquête. Les tests sous enquête deviendront éventuellement positifs ou négatifs.</font>
            </Paper>
        </Grid>
        <Grid item xs={12}>
             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau5/>
                </React.Suspense>

            </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
      </React.Fragment>
      );
  }
}
function FormRow6(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Number of deaths: Quebec vs. The world</h1>
              <font style={styles.description}>
              Left Table: This shows the trajectory in the number of cases in Quebec, relative to other countries. In the x-axis, we plot the number of days since the total number of deaths, in each region, reached five. In the y-axis, we plot the total number of deaths. The straight grey lines show trajectories for a doubling time of 2 days, 3 days, 5 days and 10 days. If a country’s line on the chart is higher than those lines, then its number of deaths is doubling faster than that.
              <br></br>
              <br></br>
              </font>
              <font style={styles.description2}>
              Right Table: This scatterplot illustrates how Quebec compares to the rest of Canada (and other countries), in terms of testing rates and number of cases. In the y axis, we test rate (number of tests per 100k inhabitants). In the x axis, we plot the number of cases. 
             </font>
             <font style={styles.description3}>
              <br></br><br></br>Ideally, we want regions to perform highly in terms of test rates, while having a low number of cases. That is, in an ideal scenario, regions should be in the upper-left region of the plot. You can click on the map to highlight a specific region.
              <br></br>
              </font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau6/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">https://www.worldometers.info/coronavirus/</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Québec vs. Monde</h1>
              <font style={styles.description}>
              Tableau Gauche: Cela montre la trajectoire du nombre de cas au Québec, par rapport aux autres pays. Dans l'axe des abscisses (x), nous indiquons le nombre de jours depuis que le nombre total de décès a atteint cinq décès par région. Sur l'axe des ordonnées (y), nous indiquons le nombre total de décès. Les lignes droites grises indiquent les trajectoires pour un temps de doublement de 2 jours, 3 jours, 5 jours et 10 jours. Si la ligne d'un pays sur le graphique est plus haute que ces lignes, alors son nombre de décès double plus vite que cela.
              <br></br>
              <br></br>
              </font>
              <font style={styles.description2}>
              Tableau Droite: Ce nuage de points illustre comment le Québec se compare au reste du Canada (et d’autres pays), en termes de taux de dépistage et de nombre de cas. Sur l’axe des ordonnées (y), nous testons le taux (nombre de tests pour 100 000 habitants). Sur l’axe des abscisses, nous traçons le nombre de cas. 
              <br></br><br></br>
              </font>
              <font style={styles.description2}>
              Idéalement, nous souhaitons que les régions soient très performantes en termes de taux de test, tout en ayant un faible nombre de cas. Autrement dit, dans un scénario idéal, les régions devraient se trouver dans la région supérieure gauche du graphique. Vous pouvez cliquer sur la carte pour choisir une région spécifique.
             </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>
             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau6/>
                </React.Suspense>

            </Paper>
        </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.worldometers.info/coronavirus/" target="_blank" rel="noopener noreferrer">https://www.worldometers.info/coronavirus/</a>
              </font>
      </React.Fragment>
       );
  }
}
function FormRow7(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Testing rates: Quebec vs. The world</h1>
              <font style={styles.description}>
              This scatterplot illustrates how Quebec compares to the rest of Canada (and other countries), in terms of testing rates and number of cases. In the y axis, we test rate (number of tests per 100k inhabitants). In the x axis, we plot the number of cases. 
              <br></br><br></br>Ideally, we want regions to perform highly in terms of test rates, while having a low number of cases. That is, in an ideal scenario, regions should be in the upper-left region of the plot. You can click on the map to highlight a specific region.</font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau7/>
              </React.Suspense>

          </Paper>
      </Grid>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h2}>Taux de tests: Québec vs. Monde</h1>
              <font style={styles.description}>
              Ce nuage de points illustre comment le Québec se compare au reste du Canada (et d’autres pays), en termes de taux de dépistage et de nombre de cas. Sur l’axe des ordonnées (y), nous testons le taux (nombre de tests pour 100 000 habitants). Sur l’axe des abscisses, nous traçons le nombre de cas. 
              <br></br><br></br>Idéalement, nous souhaitons que les régions soient très performantes en termes de taux de test, tout en ayant un faible nombre de cas. Autrement dit, dans un scénario idéal, les régions devraient se trouver dans la région supérieure gauche du graphique. Vous pouvez cliquer sur la carte pour choisir une région spécifique.</font>
            </Paper>
        </Grid>
        <Grid item xs={12}>
             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

                <Tableau7/>
                </React.Suspense>

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
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h2}>Rate of change</h1>
              <font style={styles.description}>
              This graph depicts the 7-day moving average rate of change for total cases, recoveries, hospitalization, intensive care and deaths. The usage of the 7-day moving average allows to eliminate noise in the graphs and discern patterns.</font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau8/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Changements quotidiens des taux</h1>
              <font style={styles.description}>
              Ce graphique illustre le taux de variation moyen mobile sur 7 jours pour le nombre total de cas, de récupérations, d’hospitalisations, de personnes soins intensifs et de décès. L’utilisation de la moyenne mobile sur 7 jours permet d'éliminer le bruit dans les graphiques et de discerner les tendances.</font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau8/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
    );
  }
}
function FormRow9(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Days to double</h1>
              <font style={styles.description}>
              This graph depicts the 7-day moving average of the number of days to double for total cases and deaths. A higher number of days to double signals a decline of the exponential growth of cases. 
              </font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau9/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h2}>Jours pour doubler</h1>
              <font style={styles.description}>
              Ce graphique illustre la moyenne mobile sur 7 jours du nombre de jours à doubler pour le nombre total de cas et de décès. Un nombre de jours pour doubler plus élevé signale une baisse de la croissance exponentielle des cas.</font>
          </Paper>
      </Grid>
      <Grid item xs={12}>
           <Paper style={styles.Paper} elevation={5}>
           <React.Suspense fallback={<div>loading ..</div>}>

              <Tableau9/>
              </React.Suspense>

          </Paper>
      </Grid>
        <font style={styles.source}>
                Source: <a style={styles.sourceLink} href="https://www.inspq.qc.ca/covid-19/donnees" target="_blank" rel="noopener noreferrer">https://www.inspq.qc.ca/covid-19/donnees</a>
              </font>
    </React.Fragment>
    );
  }
}

class Exercises extends Component {
  
  render() {
    console.log(this.props.row);
    switch (this.props.row) {
      // MONTREAL
      // MTL nb
      case 0:
        return (
        /*
         <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0" >
                <FormRow0 lang={this.props.lang}/>
          </Grid>
          */
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="3">
                <FormRowTemp lang={this.props.lang}/>
            </Grid>
          </Grid>
          //</Grid>
          );
      // Cases per day MTL
      case 1:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRowMontrealCases lang={this.props.lang}/>
            </Grid>
        </Grid>
          );
   
      case 2:
          return (
              <Grid container style={styles.frags}>
                <Grid container item xs={12} spacing={3}>
                    <FormRowCIUSSSTrend lang={this.props.lang}/>
                </Grid>
            </Grid>
              );

      case 3:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3}>
                  <FormRowMontrealAgeDist lang={this.props.lang}/>
              </Grid>
          </Grid>
            );
      case 4:
          return (
              <Grid container style={styles.frags}>
                <Grid container item xs={12} spacing={3}>
                    <FormRowCityMobility lang={this.props.lang}/>
                </Grid>
            </Grid>
              );
            
      //PROVINCE
      // Map of administrative regions
      case 5:
        return (
          /*
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0" >
                <FormRow0 lang={this.props.lang}/>
            </Grid>
            */
            <Grid container item xs={12} spacing={3} id="1">
                <FormRow1 lang={this.props.lang}/>
            </Grid>
          );
      
      // Cases per day - QC
      case 6:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRow3 lang={this.props.lang}/>
            </Grid>
        </Grid>
          );
          
      // Cases per type
      case 7:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="2">
                <FormRow4 lang={this.props.lang}/>
            </Grid>
          </Grid>
          );
      
        case 8:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3}>
                  <FormRowProvinceAgeDist lang={this.props.lang}/>
              </Grid>
          </Grid>
        );
      
      // Testing rates
      case 9:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRow5 lang={this.props.lang}/>
            </Grid>
        </Grid>
          );
      
      case 10:
          return (
              <Grid container style={styles.frags}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow6 lang={this.props.lang}/>
                </Grid>
            </Grid>
              );
      
    /*
      case 9:
          return (
              <Grid container style={styles.frags}>
                <Grid container item xs={12} spacing={3}>
                    <FormRow7 lang={this.props.lang}/>
                </Grid>
            </Grid>
              );
      */
      case 11:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3} id="11">
                  <FormRow8 lang={this.props.lang}/>
              </Grid>
          </Grid>
            );
      case 12:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3}>
                  <FormRow9 lang={this.props.lang}/>
              </Grid>
          </Grid>
          );     
        default:
          return (
            /*
            <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0" >
                <FormRow0 lang={this.props.lang}/>
            </Grid>
            */
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3} id="3">
                  <FormRowTemp lang={this.props.lang}/>
              </Grid>
            </Grid>
            //</Grid>
          );
          /*
          return (
            <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0">
                <FormRow0 lang={this.props.lang}/>
            </Grid>
            <Grid container item xs={12} spacing={3} id="1">
              <FormRow1 lang={this.props.lang}/>
            </Grid>
          </Grid>
          );
          */

    }
  
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
