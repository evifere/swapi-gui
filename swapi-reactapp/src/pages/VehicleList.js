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

const dataQuery = "{vehicles {name model manufacturer cost_in_credits length max_atmosphering_speed crew}}";

class VehicleList extends React.Component {


    render() {

        return (
            <Datatable title="Vehicles" dataKey="vehicles" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default VehicleList