import React from "react";
import Datatable from '../components/Datatable';


const headers = [
    { label: "Name", id: "name" },
    { label: "Height", id: "height" },
      { label: "Mass (g)", id: "mass" },
      { label: "Hair color", id: "hair_color" },
      { label: "Skin color", id: "skin_color" },
      { label: "Birth year", id: "birth_year" }
];

const dataQuery = "{people(skip:10 first:0) {name height mass hair_color skin_color birth_year gender}}";

class PlanetList extends React.Component {


    render() {

        return (
            <Datatable title="People" dataKey="people" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default PlanetList