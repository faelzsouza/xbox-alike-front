import React from "react";
import './EmbedVideo.scss'

const EmbedVideo = ({videoUrl}) => {
    return (
        <iframe
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="game-video"
        ></iframe>
    );
};

export default EmbedVideo;
