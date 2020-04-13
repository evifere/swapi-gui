import React from "react";
import { Link } from "react-router-dom";
import ButtonBase from "../components/ButtonBase"

const images = [
    {
        url: '/assets/people_category.png',
        title: 'Characters',
        width: '30%',
    },
    {
        url: '/assets/planet_category.png',
        title: 'Planets',
        width: '30%',
    },
    {
        url: '/assets/species_category.png',
        title: 'Species',
        width: '30%',
    },
    {
        url: '/assets/starship_category.png',
        title: 'Starships',
        width: '30%',
    },
    {
        url: '/assets/film_category.png',
        title: 'Films',
        width: '30%',
    },
    {
        url: '/assets/vehicle_category.png',
        title: 'Vehicles',
        width: '30%',
    },
];

class Home extends React.Component {

    render() {
        return (
            <div>
                <h2>Home</h2>
                <div>
                    <ul>
                        <li>
                            <Link to="/planets">Planets</Link>
                        </li>
                        <li>
                            <Link to="/people">People</Link>
                        </li>
                        <li>
                            <Link to="/species">Species</Link>
                        </li>
                        <li>
                            <Link to="/starships">Starships</Link>
                        </li>
                        <li>
                            <Link to="/vehicles">Vehicles</Link>
                        </li>
                        <li>
                            <Link to="/films">Films</Link>
                        </li>
                    </ul>
                </div>
                <ButtonBase images={images} />
            </div>
        );
    }

}

export default Home