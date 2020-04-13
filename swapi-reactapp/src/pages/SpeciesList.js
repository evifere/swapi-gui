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
const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/species-128.png" alt="logo" />)

class SpeciesList extends React.Component {


    render() {

        return (
            <Datatable titleImg={titleImg} title="Species" dataKey="species" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default SpeciesList