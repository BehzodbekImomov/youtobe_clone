import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Main.scss";
export class Main extends Component {
  render() {
    const { video } = this.props;
    // console.log(video);
    return (
      <Link to={`/video/${video.videoId}`} className="card">
        <img className="" src={video.thumbnails[0].url} alt="" />

        <div className="card-img-title">
          <img src={video.author.avatar[0].url} alt="" />
          <h4>{video.title}</h4>
        </div>
        <div className="desc">
          <p>{video.author.title}</p>
          <div className="span">
            <span>{video.stats.views}</span>
            <span>{video.publishedTimeText}</span>
          </div>
        </div>
      </Link>
    );
  }
}

export default Main;
