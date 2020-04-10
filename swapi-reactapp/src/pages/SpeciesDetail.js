import React from "react";
import Datadetail from '../components/Datadetail';

const headers = [
    {
        label: "Name",
        id: "name"
    },
    { label: "Classification", id: "classification" },
    { label: "Designation", id: "designation" },
    { label: "Average height", id: "average_height" },
    { label: "Skin colors", id: "skin_colors" },
    { label: "Hair colors", id: "hair_colors" }

];

class SpeciesDetail extends React.Component {

    render() {
        const name = this.props.match.params.name;

        const dataQuery = '{specie( name:"' + name + '") {name classification designation average_height skin_colors hair_colors eye_colors average_lifespan language homeworld{name}}}'

        return (
            <div>

                <Datadetail title="Species detail" dataKey="specie" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default SpeciesDetail