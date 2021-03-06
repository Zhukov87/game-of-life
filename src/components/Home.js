import React, { Component } from "react";
import { connect } from "react-redux";
import { setGameFieldOptions } from "../actionCreators/actionCreators";
import { withRouter } from "react-router-dom";

class Home extends Component {
  state = {
    width: 5,
    height: 5
  };

  handleSubmit = ev => {
    ev.preventDefault();

    this.props.setGameFieldOptions(this.state.width, this.state.height);

    this.props.ownProps.history.push("/game");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Width"
            value={this.state.width}
            onChange={event => {
              this.setState({ width: event.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Height"
            value={this.state.height}
            onChange={event => {
              this.setState({ height: event.target.value });
            }}
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(
  connect(
    (state, ownProps) => ({ state, ownProps }),
    { setGameFieldOptions }
  )(Home)
);
