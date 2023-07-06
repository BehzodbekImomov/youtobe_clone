import React, { Component, Fragment } from "react";
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://youtube138.p.rapidapi.com/video/details/",
  params: {
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": "9966cbb7d0msh6e4e8e1e1a5245ep1252c5jsn4d914057cb4f",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export class VideoP extends Component {
  state = {
    video: null,
  };
  componentDidMount() {
    this.getDetaile();
  }
  getDetaile = async () => {
    const id = window.location.pathname.split("/").at(-1);
    options.params.id = id;
    try {
      const response = await axios.request(options);
      this.setState({ video: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Fragment>
        <h1>{this.state.video.title}</h1>
      </Fragment>
    );
  }
}

export default VideoP;
