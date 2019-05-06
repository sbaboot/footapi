import React from 'react';
import axios from 'axios';
import DescriptifPlayer from './DescriptifPlayer';


class TopScorers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersList: [],
    }
    this.getPlayers = this.getPlayers.bind(this);
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers() {
    const APIkey = '595b83975e3105696f2a21219af3b35182f28e4e68b9de6e76d67f904a9fcc62';
    axios
      .get(`https://allsportsapi.com/api/football/?&met=Teams&teamId=3040&APIkey=${APIkey}`)
      .then(response => (response.data))
      .then(data => this.setState({ playersList: data.result[0].players }))
  };

  render() {
    return (
      <div className="main">
        <DescriptifPlayer
          players={this.state.playersList}
        />
      </div>
    );
  }
}

export default TopScorers;