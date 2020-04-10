import React from "react";
import Datadetail from '../components/Datadetail';

const headers = [ { label: "Name", id: "name" },
{ label: "Height", id: "height" },
  { label: "Mass (g)", id: "mass" },
  { label: "Hair color", id: "hair_color" },
  { label: "Skin color", id: "skin_color" },
  { label: "Birth year", id: "birth_year" },
  { label: "Gender", id: "gender" }
  
];

class PeopleDetail extends React.Component {

    render() {
        const name = this.props.match.params.name;
        console.log('this.props', this.props.match.params)

        const dataQuery = '{person( name:"' + name +'") {name height mass hair_color skin_color birth_year gender homeworld{name}}}'
        return (
            <div>
 
                <Datadetail title="People detail" dataKey="person" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default PeopleDetail