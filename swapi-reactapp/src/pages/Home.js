import React from "react";
import { Link } from "react-router-dom";


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
            </div>
        );
    }

}

export default Home