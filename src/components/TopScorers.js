import React from 'react';
import axios from 'axios';
import Scorer from './Scorer';

class TopScorers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorersList: [],
    }
    this.getTopScorers = this.getTopScorers.bind(this);
    this.handlerRemove = this.handlerRemove.bind(this)
  }

  componentDidMount() {
    this.getTopScorers();
  }

  getTopScorers() {
    const APIkey = '595b83975e3105696f2a21219af3b35182f28e4e68b9de6e76d67f904a9fcc62';
    axios
      .get(`https://allsportsapi.com/api/football/?&met=Topscorers&leagueId=176&APIkey=${APIkey}`)
      .then(response => (response.data))
      .then(data => this.setState({ scorersList: data.result }))
  };

  handlerRemove(index) {
    let listOfScorers = this.state.scorersList;
    let newScorerList = listOfScorers.splice(index, 1);
    this.setState({ scorersList: listOfScorers })
  };

  render() {
    return (
      <div className="main">
        <Scorer
          delete={this.handlerRemove}
          scorers={this.state.scorersList}
        />
      </div>
    );
  }
}

export default TopScorers;