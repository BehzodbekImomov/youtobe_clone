import React, { Component } from "react";
import axios from "axios";
import Main from "../components/Main";
import '../components/Main/Main.scss'

const options = {
  method: 'GET',
  url: 'https://youtube138.p.rapidapi.com/home/',
  params: {hl: 'en', gl: 'US'},
  headers: {
    'X-RapidAPI-Key': '6f376a27e6msh06845b947281f01p1db2c9jsn851234543903',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

export class HomeP extends Component {
  state = {
    videos: [],
  };
  componentDidMount() {
    this.getVideos();
  }

  getVideos = async (search="") => {
    try {
      options.params.q=search
      const res = await axios.request(options);
      this.setState({ videos: res.data.contents });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="containers">
       <ul className="card_wrapper">
       {this.state.videos.map((video, index) => (
          <Main key={index} {...video} />
        ))}
       </ul>
      </div>
    );
  }
}

export default HomeP;
