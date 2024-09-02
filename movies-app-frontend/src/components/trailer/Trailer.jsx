import {useParams} from "react-router-dom";
import ReactPlayer from "react-player";
import './Trailer.css'

import React from 'react';

export default function Trailer() {
    const {ytTrailerId} = useParams();
    console.log(ytTrailerId);
    return (
        <div className="react-player-container">
        {(ytTrailerId != null)
            ? <ReactPlayer controls={true} playing={true} url={`https://www.youtube.com/watch?v=${ytTrailerId}`} width="100%" height="100%"/>
            : null}
        </div>
    );
}