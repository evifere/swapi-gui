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

const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/film-128.png" alt="logo" />)

class FilmList extends React.Component {


    render() {

        return (
            <Datatable titleImg={titleImg} title="Films" dataKey="films" dataQuery={dataQuery} headers={headers} />
        )
    }
}

export default FilmList