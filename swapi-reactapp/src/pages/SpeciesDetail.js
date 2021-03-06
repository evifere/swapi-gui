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
    { label: "Hair colors", id: "hair_colors" },
    { label: "Home world", id: "homeworld", "child_id": "name", "to": "/planets" }


];

class SpeciesDetail extends React.Component {

    render() {
        const name = this.props.match.params.name;
        const dataQuery = '{specie( name:"' + name + '") {name classification designation average_height skin_colors hair_colors eye_colors average_lifespan language homeworld{name}}}'
        const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/species-128.png" alt="logo" />)

        return (
            <div>

                <Datadetail  titleImg={titleImg} title="Species detail" dataKey="specie" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default SpeciesDetail