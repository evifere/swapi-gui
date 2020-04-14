import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './pages/Home';
import PlanetList from './pages/PlanetList';
import PlanetDetail from './pages/PlanetDetail';
import PeopleList from './pages/PeopleList';
import PeopleDetail from './pages/PeopleDetail';
import SpeciesList from './pages/SpeciesList';
import SpeciesDetail from './pages/SpeciesDetail';
import StarshipList from './pages/StarshipList';
import StarshipDetail from './pages/StarshipDetail';
import VehicleList from './pages/VehicleList';
import VehicleDetail from './pages/VehicleDetail';
import FilmList from './pages/FilmList';
import FilmDetail from './pages/FilmDetail';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
const useStyles = makeStyles((theme) => ({
    toolbar: {
        paddingLeft: 0,
    },
}))

export default function AppRouter() {
    const classes = useStyles();

    return (
        <Router>
            <AppBar position="relative" >
                <Toolbar className={classes.toolbar}>
                    <img src={logo} alt="logo" />
                    <Typography variant="h6" color="inherit" noWrap>
                        Swapi -reactapp
                    </Typography>
                </Toolbar>

            </AppBar>

            <main>
                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/planets">
                        <PlanetList />
                    </Route>
                    <Route exact path="/planets/:name" component={PlanetDetail} />
                    <Route exact path="/people">
                        <PeopleList />
                    </Route>
                    <Route exact path="/people/:name" component={PeopleDetail} />
                    <Route exact path="/species">
                        <SpeciesList />
                    </Route>
                    <Route exact path="/species/:name" component={SpeciesDetail} />
                    <Route exact path="/starships">
                        <StarshipList />
                    </Route>
                    <Route exact path="/starships/:name" component={StarshipDetail} />
                    <Route exact path="/vehicles">
                        <VehicleList />
                    </Route>
                    <Route exact path="/vehicles/:name" component={VehicleDetail} />
                    <Route exact path="/films">
                        <FilmList />
                    </Route>
                    <Route exact path="/films/:episode_id" component={FilmDetail} />

                </Switch>
            </main>
        </Router>
    );
}
