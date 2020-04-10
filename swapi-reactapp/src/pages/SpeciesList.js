import React from "react";
import Datatable from '../components/Datatable';


const headers = [
    { label: "Name", id: "name" },
    { label: "Classification", id: "classification" },
      { label: "Designation", id: "designation" },
      { label: "Average height", id: "average_height" },
      { label: "Skin colors", id: "skin_colors" },
      { label: "Hair colors", id: "hair_colors" }
];

const dataQuery = "{species {name classification designation average_height skin_colors hair_colors}}";

class SpeciesList extends React.Component {


    render() {

        return (
            <Datatable title="Species" dataKey="species" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default SpeciesList