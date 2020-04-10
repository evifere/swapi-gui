import React from "react";
import axios from 'axios';
import Datatable from '../components/Datatable';


class PlanetList extends React.Component {


    constructor(props) {

        super(props)

    }

    
    render() {

        return (
            <Datatable />
        )
    }
}

export default PlanetList