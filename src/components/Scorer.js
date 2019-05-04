import React from "react";

class Scorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorer: "",
    }
  }

  render() {
    return (
      <div>
        {this.props.scorers
          &&
          this.props.scorers.map((scorer, index) => {
            return (
              <div key={index}>
                <h1>{scorer.player_place} - {scorer.player_name}</h1>
                <h2>{scorer.team_name}</h2>
                <h2>{scorer.goals} ⚽</h2>
                <button onClick={() => this.props.delete(index)}>Supprimer</button>
                <br />
              </div>
            );
          })
        }
      </div>


    );
  };
}

export default Scorer;