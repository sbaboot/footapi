import React from "react";

class DescriptifPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: "",
    }
  }

  render() {
    return (
      <div>
        {this.props.players
          &&
          this.props.players
            .map((player, index) => {
              return (
                <div key={index}>
                  <p>{player.player_name}</p>
                </div>
              );
            })
        }
      </div>


    );
  };
}

export default DescriptifPlayer;