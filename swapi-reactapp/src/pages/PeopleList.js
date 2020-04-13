import React from "react";
import Datatable from '../components/Datatable';
import logo from '../logo.svg';


const headers = [
    { label: "Name", id: "name" },
    { label: "Height", id: "height" },
      { label: "Mass (g)", id: "mass" },
      { label: "Hair color", id: "hair_color" },
      { label: "Skin color", id: "skin_color" },
      { label: "Birth year", id: "birth_year" }
];

const dataQuery = "{people(skip:10 first:0) {name height mass hair_color skin_color birth_year gender}}";

const titleImg = (<img style={{ float: "right",maxWidth:128 }} src={logo} alt="logo" />)

class PeopleList extends React.Component {


    render() {

        return (
            <Datatable titleImg={titleImg} title="People" dataKey="people" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default PeopleList