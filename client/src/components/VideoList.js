import React, { useEffect, useState } from "react";
import Video from './Video';
import { getAllVideos, getVideoWithComments, videoSearch } from "../modules/videoManager";

const VideoList = () => {
    const [videos, setVideos] = useState([]);
    const [search, setSearch] = useState("")
    const [foundVideo, setFoundVideo] = useState([])

    const getVideos = () => {
        getVideoWithComments().then(videos => setVideos(videos));
    };

    useEffect(() => {
        getVideos();
    }, []);

    const handleInput = (event) => {
        let searchInput = event.target.value
        setSearch(searchInput)
    }

    async function handleButtonClick() {
        let result = await videoSearch(search, false)
        setFoundVideo(result)
    }

    useEffect(() => {
        if (search !== "") {
            foundVideo.forEach(v => {
            document.querySelector("#search-results").innerHTML +=
            `<h4>${v.title}</h4>
            <p>${v.description}</p>`
            })
        }
    }, [foundVideo])

    return (
        <>
            <div className="align-items-center">
                <input value={search} onChange={handleInput} style={{ width: "50%", margin: "1em" }}></input>
                <br></br>
                <button className="align-items-center" onClick={handleButtonClick} style={{ width: "100px", height: "30px", border: "none", marginBottom: "10px" }}>Search</button>
            </div>
            <div id="search-results">

            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {videos.map((video) => (
                        <Video video={video} key={video.id} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default VideoList;