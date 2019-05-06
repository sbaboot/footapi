import React from "react";

class Scorer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scorer: "",
      value: "",
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <input
          className="search_input"
          type="text"
          placeholder="Search..."
          value={this.state.value}
          onChange={this.onChange}
        />
        {this.props.scorers
          &&
          this.props.scorers
            .filter(scorer => {
              return scorer.team_name.toLowerCase().includes(this.state.value)
            })
            .map((scorer, index) => {
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