import React from "react";
import Datatable from '../components/Datatable';


const headers = [
    { label: "Name", id: "name" },
    { label: "Model", id: "model" },
    { label: "Manufacturer", id: "manufacturer" },
    { label: "Cost In credits", id: "cost_in_credits" },
    { label: "Length", id: "length" },
    { label: "Max atmosphering speed", id: "max_atmosphering_speed" },
    { label: "Crew", id: "crew" }
];

const dataQuery = "{starships {name model manufacturer cost_in_credits length max_atmosphering_speed crew}}";
const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/starship-128.png" alt="logo" />)

class StarshipList extends React.Component {


    render() {

        return (
            <Datatable titleImg={titleImg} title="Starships" dataKey="starships" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default StarshipList