import React from "react";
import Datadetail from '../components/Datadetail';

const headers = [
    { label: "Name",id: "name" },
    { label: "Model", id: "model" },
    { label: "Manufacturer", id: "manufacturer" },
    { label: "Cost In credits", id: "cost_in_credits" },
    { label: "Length", id: "length" },
    { label: "Max atmosphering speed", id: "max_atmosphering_speed" },
    { label: "Crew", id: "crew" },
    { label: "Films", id: "films", "child_id": "title", "to": "/films","link_id":"episode_id" },
    { label: "Pilots", id: "pilots", "child_id": "name", "to": "/people","link_id":"name" }

];

class StarshipDetail extends React.Component {

    render() {
        const name = this.props.match.params.name;

        const dataQuery = '{starship( name:"' + name + '") {name model manufacturer cost_in_credits length max_atmosphering_speed crew cargo_capacity consumables hyperdrive_rating MGLT starship_class films {title episode_id} pilots{name}}}'
        const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/starship-128.png" alt="logo" />)

        return (
            <div>

                <Datadetail titleImg={titleImg} title="Starship detail" dataKey="starship" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default StarshipDetail