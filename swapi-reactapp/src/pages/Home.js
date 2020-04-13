import React from "react";
import { withStyles } from '@material-ui/core/styles';
import ButtonBaseList from "../components/ButtonBaseList"

const images = [
    {
        url: '/assets/people_category.png',
        title: 'Characters',
        width: '30%',
        to: '/people'
    },
    {
        url: '/assets/planet_category.png',
        title: 'Planets',
        width: '30%',
        to: '/planets'
    },
    {
        url: '/assets/species_category.png',
        title: 'Species',
        width: '30%',
        to: '/species'
    },
    {
        url: '/assets/starship_category.png',
        title: 'Starships',
        width: '30%',
        to: '/starships'
    },
    {
        url: '/assets/film_category.png',
        title: 'Films',
        width: '30%',
        to: '/films'
    },
    {
        url: '/assets/vehicle_category.png',
        title: 'Vehicles',
        width: '30%',
        to: '/vehicles'
    },
];

const useStyles = ((theme) => ({
    root: {
        marginTop: '5rem',
    }
}));

class Home extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <ButtonBaseList images={images} />
            </div>
        );
    }

}

export default withStyles(useStyles)(Home);