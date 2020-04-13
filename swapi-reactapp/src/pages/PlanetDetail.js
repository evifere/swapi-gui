import React from "react";
import Datadetail from '../components/Datadetail';

const headers = [ {
    label: "Name",
    id: "name",
},
{ label: "Rotation period", id: "rotation_period", align: "right" },
{ label: "Orbital period", id: "orbital_period", align: "right" },
{ label: "Diameter", id: "diameter", align: "right" },
{ label: "Climate", id: "climate", align: "right" },
{ label: "Terrain", id: "terrain", align: "right" }
];

class PlanetDetail extends React.Component {

    render() {
        const name = this.props.match.params.name;
        const dataQuery = '{planet( name:"' + name +'") {name population rotation_period orbital_period diameter climate terrain}}'
        const titleImg = (<img style={{ float: "right" }} src="/assets/planet-96.png" alt="logo" />)

        return (
            <div>
 
                <Datadetail titleImg={titleImg} title="Planet detail" dataKey="planet" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default PlanetDetail