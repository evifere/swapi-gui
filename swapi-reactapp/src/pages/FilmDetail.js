import React from "react";
import Datadetail from '../components/Datadetail';

const headers = [
   
      { label: "Episode ID", id: "episode_id" },
      { label: "Title", id: "title" },
      { label: "Director", id: "director" },
      { label: "Producer", id: "producer" },
      { label: "Release date", id: "release_date" }
];

class FilmDetail extends React.Component {

    render() {
        const episode_id = this.props.match.params.episode_id;
        const dataQuery = '{film( episode_id:' + episode_id +') {episode_id title opening_crawl director producer release_date characters{name}}}'
        const titleImg = (<img style={{ float: "right",maxWidth:128 }} src="/assets/film-128.png" alt="logo" />)

        return (
            <div>

                <Datadetail titleImg={titleImg} title="Film detail" dataKey="film" dataQuery={dataQuery} headers={headers} />

            </div>
        );
    }
}
export default FilmDetail