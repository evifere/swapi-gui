import React from "react";
import Datatable from '../components/Datatable';


const headers = [
    { label: "Episode ID", id: "episode_id" },
    { label: "Title", id: "title" },
    { label: "Director", id: "director" },
    { label: "Producer", id: "producer" },
    { label: "Release date", id: "release_date" }
];

const dataQuery = "{films {episode_id title opening_crawl director producer release_date}}";

class VehicleList extends React.Component {


    render() {

        return (
            <Datatable title="Films" dataKey="films" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default VehicleList