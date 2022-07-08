import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { addVideo } from "../modules/videoManager";

export const VideoForm = ({ getVideos }) => {
  const [video, setVideo] = useState(
    {
      title: "",
      url: "",
      description: ""
    }
  )

  let navigate = useNavigate()

  const handleInput = (event) => {
    const newVideo = { ...video }
    let input = event.target.value
    newVideo[event.target.id] = input
    setVideo(newVideo)
  }

  const handleAddVideo = () =>{
    addVideo(video).then(() => {
      navigate("/");
    })
  }

  return (
    <div>
      <br></br>
      <input id='title' value={video.title} onChange={handleInput} placeholder="Title">
      </input>
      <br></br>
      <br></br>
      <input id='url' value={video.url} onChange={handleInput} placeholder="Url">
      </input>
      <br></br>
      <br></br>
      <input id='description' value={video.desc} onChange={handleInput} placeholder="Desc">
      </input>
      <br></br>
      <br></br>
      <button onClick={handleAddVideo}>Add Video</button>
    </div>
  );
};