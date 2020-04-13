import React from "react";
import Datatable from '../components/Datatable';


const headers = [
    {
        label: "Name",
        id: "name",
    },
    { label: "Rotation period", id: "rotation_period", align: "right" },
    { label: "Orbital period", id: "orbital_period", align: "right" },
    { label: "Diameter", id: "diameter", align: "right" },
    { label: "Climate", id: "climate", align: "right" },
    { label: "Terrain", id: "terrain", align: "right" }
];

const dataQuery = "{planets {name rotation_period orbital_period diameter climate terrain}}";

const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/planet-96.png" alt="logo" />)

class PlanetList extends React.Component {


    render() {

        return (
            <Datatable titleImg={titleImg} title="Planets" dataKey="planets" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default PlanetList