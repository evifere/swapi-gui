import React from "react";
import Datatable from '../components/Datatable';


class PlanetList extends React.Component {


    render() {

        return (
            <Datatable dataKey="planets" dataQuery="{planets {name rotation_period orbital_period diameter climate terrain}}"/>
        )
    }
}

export default PlanetList