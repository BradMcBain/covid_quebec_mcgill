import React, { Component }  from 'react'
import { Grid } from "@material-ui/core"

import { Paper } from "@material-ui/core"
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

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
const TableauMontreal = React.lazy(()=> import('../Tableau/TableauMontreal'))

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
        h3:{ color:"#334B63", display:"block", textAlign:"center", fontFamily: "Nunito Sans" },
        source: { display:"inline", textAlign: "left", color: "#334B63", marginLeft: 12, marginBottom:100, fontFamily:"Nunito Sans" },
        frags: {
        }
}

function FormRow0(props){
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment >
        <Grid item xs={12}>
             <Paper style={styles.Welcome}  elevation={10}>
             <h1 style={styles.h3}>Welcome</h1>
             <font face="Nunito Sans" size="3" color="#334B63" margin-bottom="100">Quebecers are not only enduring the COVID-19 pandemic, but also experiencing an avalanche of misinformation. To disseminate accurate data, McGill University members decided to work together to design an infographic data dashboard that relies solely on official government figures.<br></br><br></br> 

              
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
              <font size="3" color="#334B63" margin-bottom="100" face="Nunito Sans">Les Québecois subissent non seulement la pandémie du COVID-19, mais font également face à une avalanche de désinformation. Pour diffuser des données précises; les membres de l’université de McGill ont décider de travailler ensemble pour convevoir un tableau de bord de données infographiques, qui repose uniquement sur les chiffres officiels du gouvernement.  

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
                 <h1 style={styles.h3}>Map of Quebec’s administrative regions</h1>
                <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">These two color-coded maps illustrate the number of confirmed cases in each of Quebec’s administrative regions. A darker shade of blue represents a higher number of cases. The left-most graphs depicts a map of Quebec. The right-most graph zooms in to the southern regions of Quebec. You can see the exact number of cases, in each region, by clicking on the maps. 
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
                Source: <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Carte de la région administrative du Québec</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
                Ces deux cartes à code couleur illustrent le nombre de cas confirmés dans chacune des régions administratives du Québec. Une teinte de bleu foncée représente un nombre plus élevé de cas. Les graphiques de gauche représentent une carte du Québec. Le graphique à l'extrème droite fait un zoom sur les régions du sud du Québec. Vous pouvez voir le nombre exact de cas, par région, en cliquant sur les cartes. 
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
                Source: <a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/#c47900" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
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
                 <h1 style={styles.h3}>Cases by CIUSSS</h1>
                <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">The exhibit shows the number of cases in each Integrated University Health and Social Services Centre (CIUSS).

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
              <h1 style={styles.h3}>Cas par CIUSSS</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                 <h1 style={styles.h3}>Cases by CIUSSS</h1>
                <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">This graph depicts the trend in the daily number of confirmed cases by Integrated University Health and Social Services Centre (CIUSSS).  <br></br><br></br>The second exhibit shows the number of cases in each Integrated University Health and Social Services Centre (CIUSS).

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
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Cas par CIUSSS</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Ce graphique illustre la tendance du nombre quotidien de cas confirmés par Centre intégré universitaire de santé et de services sociaux (CIUSSS).<br></br><br></br>              La deuxième exposition montre le nombre total de cas, dans chaque Centre intégré universitaire de santé et de services sociaux (CIUSSS).
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
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
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
                 <h1 style={styles.h3}>Cases by age group</h1>
                <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">This pie chart shows the distribution of confirmed cases by age group.

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
              <h1 style={styles.h3}>Cas par groupe d’âge</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Ce diagramme circulaire illustre la répartition des cas confirmés par groupe d’âge.              </font>
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
                 <h1 style={styles.h3}>Cases per day—Montreal</h1>
                <font size="4" color="#334B63" margin-bottom="100" textAlign="center" face="Nunito Sans">
                This stacked bar chart depicts the number of daily new cases in each Montreal borough. To highlight a specific borough, you can click on the graph.<br></br><br></br> The pie chart shows the distribution of confirmed cases by age group.
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
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Cas par jour—Montréal</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Ce graphique à barres empilées illustre le nombre de nouveaux cas journaliers dans chaque arrondissement de Montréal. Pour sélectionner un arrondissement en particulier, vous pouvez cliquer sur le graphique.<br></br><br></br>Ce diagramme circulaire illustre la répartition des cas confirmés par groupe d’âge. 
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
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  }
  
}



function FormRowTemp(props) {
  const classes = useStyles();
  if (props.lang === "en"){
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">
             <Paper style={styles.Paper} elevation={5}>
                 <h1 style={styles.h3}>Montreal Neighbourhoods</h1>
                <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">This map shows the number of confirmed cases in each montreal borough. You can click on the map to see the exact number of cases in each neighbourhood.
                </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>


                <TableauMontreal/>
                </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/#c36391" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
              <h1 style={styles.h3}>Arrondissements de Montréal</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">Cette carte montre le nombre de cas confirmés dans chacun des arrondissements de Montréal. Vous pouvez cliquer sur la carte pour voir le nombre exact de cas dans chaque quartier.
              </font>
            </Paper>
        </Grid>
        <Grid item xs={12}>

             <Paper style={styles.Paper} elevation={5}>
             <React.Suspense fallback={<div>loading ..</div>}>

              <TableauMontreal/>
              </React.Suspense>

            </Paper>

        </Grid>
        <font style={styles.source}>
                Source: <a href="https://santemontreal.qc.ca/population/coronavirus-covid-19/" target="_blank">https://santemontreal.qc.ca/population/coronavirus-covid-19/</a>
              </font>
      </React.Fragment>
    );
  }
  
}

function FormRow2(props) {
  if (props.lang === "en"){

  return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Total cases per region</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                Source: <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Nombre total de cas par région</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                Source: <a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/#c47900" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
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
           <h1 style={styles.h3}>Cases per day—Regions of Quebec</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              This stacked bar chart depicts the number of daily new cases in each region. To highlight a specific region, you can click on the graph.</font>
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
                Source: <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/situation-coronavirus-in-quebec/" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Cas par jour—régions du Québec</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                Source: <a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/#c47900" target="_blank">https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/situation-coronavirus-quebec/</a>
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
           <h1 style={styles.h3}>Cases by Type</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              This exhibit plots four trends: total cases, hospitalized cases, cases under intensive care, and deaths.</font>
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
                Sources: <br></br>
                <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
                <br></br>
                <a href="https://twitter.com/francoislegault" target="_blank">Govt of Quebec’s daily press briefing</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Cas par type</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Cette exposition trace quatres tendances: nombre total de cas, cas hospitalisés, cas sous soins intensifs et décès.</font>
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
                Sources:
                <br></br>
                <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
                <br></br>
                <a href="https://twitter.com/francoislegault" target="_blank">Point de presse quotidien du gouvernement du Québec</a>
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
           <h1 style={styles.h3}>Testing rates</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Taux de tests</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
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
           <h1 style={styles.h3}>Number of deaths: Quebec vs. The world</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Left Table: This shows the trajectory in the number of cases in Quebec, relative to other countries. In the x-axis, we plot the number of days since the total number of deaths, in each region, reached five. In the y-axis, we plot the total number of deaths. The straight grey lines show trajectories for a doubling time of 2 days, 3 days, 5 days and 10 days. If a country’s line on the chart is higher than those lines, then its number of deaths is doubling faster than that.
              <br></br>
              <br></br>
              Right Table: This scatterplot illustrates how Quebec compares to the rest of Canada (and other countries), in terms of testing rates and number of cases. In the y axis, we test rate (number of tests per 100k inhabitants). In the x axis, we plot the number of cases. 
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
                Source: <a href="https://www.worldometers.info/coronavirus/" target="_blank">https://www.worldometers.info/coronavirus/</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
      <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">             
        <Paper style={styles.Paper} elevation={5}>
             <h1 style={styles.h3}>Québec vs. Monde</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Tableau Gauche: Cela montre la trajectoire du nombre de cas au Québec, par rapport aux autres pays. Dans l'axe des abscisses (x), nous indiquons le nombre de jours depuis que le nombre total de décès a atteint cinq décès par région. Sur l'axe des ordonnées (y), nous indiquons le nombre total de décès. Les lignes droites grises indiquent les trajectoires pour un temps de doublement de 2 jours, 3 jours, 5 jours et 10 jours. Si la ligne d'un pays sur le graphique est plus haute que ces lignes, alors son nombre de décès double plus vite que cela.
              <br></br>
              <br></br>
              Tableau Droite: Ce nuage de points illustre comment le Québec se compare au reste du Canada (et d’autres pays), en termes de taux de dépistage et de nombre de cas. Sur l’axe des ordonnées (y), nous testons le taux (nombre de tests pour 100 000 habitants). Sur l’axe des abscisses, nous traçons le nombre de cas. 
              <br></br><br></br>Idéalement, nous souhaitons que les régions soient très performantes en termes de taux de test, tout en ayant un faible nombre de cas. Autrement dit, dans un scénario idéal, les régions devraient se trouver dans la région supérieure gauche du graphique. Vous pouvez cliquer sur la carte pour choisir une région spécifique.
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
                Source: <a href="https://www.worldometers.info/coronavirus/" target="_blank">https://www.worldometers.info/coronavirus/</a>
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
           <h1 style={styles.h3}>Testing rates: Quebec vs. The world</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
             <h1 style={styles.h3}>Taux de tests: Québec vs. Monde</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
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
              <h1 style={styles.h3}>Daily rate changes</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              This exhibit illustrates the daily percentage increase in cases, deaths, and hospitalizations.</font>
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Changements quotidiens des taux</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Cette pièce illustre l'augmentation quotidienne en pourcentage des cas, des décès et des hospitalisations.</font>
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
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
           <h1 style={styles.h3}>Death rate and  days to double</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              This exhibit shows three statistics. In the left-most column depicts the death rate (deaths/ confirmed cases) in Quebec. The middle and right-most columns depict how long it has taken for the number of case to double, as a function of time. The higher these figures are, the slower the disease is spreading.
              <br></br><br></br>Note: To calculate “days to double.” we use the following formula: ln(2)/ln(1+r), where r is the 3-day increase rate  smoothed average.</font>
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
              </font>
    </React.Fragment>
  );
  } else {
    return (
    <React.Fragment>
        <Grid item xs={12} container spacing={0} direction="column" alignItems="center" justify="center">           
        <Paper style={styles.Paper} elevation={5}>
           <h1 style={styles.h3}>Taux de mortalité et jours pour doubler</h1>
              <font size="4" color="#334B63" margin-bottom="100" face="Nunito Sans">
              Cette exposition présente trois statistiques. La colonne de gauche représente le taux de mortalité (décès / cas confirmés) au Québec. Les colonnes du milieu et de la droite indiquent le temps qu'il a fallu pour que le nombre de cas double, en fonction du temps. Plus ces chiffres sont élevés, plus la maladie se propage lentement.</font>
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
                Source: <a href="https://twitter.com/sante_qc?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1239223631793848326&ref_url=https%3A%2F%2Fmontrealgazette.com%2Fnews%2Flocal-news%2Fcovid-19-quebec-orders-bars-and-theatres-to-close-restaurants-to-limit-customers" target="_blank">Santé Québec - Twitter</a>
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
         <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0" >
                <FormRow0 lang={this.props.lang}/>
          </Grid>
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="3">
                <FormRowTemp lang={this.props.lang}/>
            </Grid>
          </Grid>
          </Grid>
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
      
      //PROVINCE
      // Map of administrative regions
      case 3:
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
      case 4:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRow3 lang={this.props.lang}/>
            </Grid>
        </Grid>
          );
          
      // Total cases per region
      case 5:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRow2 lang={this.props.lang}/>
            </Grid>
          </Grid>
          );
      // Cases per type
      case 6:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="2">
                <FormRow4 lang={this.props.lang}/>
            </Grid>
          </Grid>
          );
      
      // Testing rates
      case 7:
        return (
          <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3}>
                <FormRow5 lang={this.props.lang}/>
            </Grid>
        </Grid>
          );
      
      case 8:
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

      case 9:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3} id="11">
                  <FormRow8 lang={this.props.lang}/>
              </Grid>
          </Grid>
            );
      case 10:
        return (
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3}>
                  <FormRow9 lang={this.props.lang}/>
              </Grid>
          </Grid>
          );     

        default:
          return (
            <Grid container style={styles.frags}>
            <Grid container item xs={12} spacing={3} id="0" >
                <FormRow0 lang={this.props.lang}/>
            </Grid>
            <Grid container style={styles.frags}>
              <Grid container item xs={12} spacing={3} id="3">
                  <FormRowTemp lang={this.props.lang}/>
              </Grid>
            </Grid>
            </Grid>
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
