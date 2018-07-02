import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { choiceCell } from "../actionCreators/actionCreators";
import { grey400, green900 } from "material-ui/styles/colors";

const styles = {
  cell: {
    width: 10,
    height: 10,
    backgroundColor: grey400
  },
  cellLive: {
    backgroundColor: green900
  }
};

class Row extends Component {
  handleClick = (index, rowId) => {
    //console.log('rowId index',rowId, index);
    this.props.choiceCell(rowId, index);
  };

  render() {
    const { row, rowId, classes } = this.props;

    const cellArray = row.map((cell, index) => {
      const cellClassName = classNames({
        [classes.cell]: true,
        [classes.cellLive]: !!cell
      });
      return (
        <td
          className={cellClassName}
          onClick={() => this.handleClick(index, rowId)}
        />
      );
    });

    return cellArray;
  }
}

export default withStyles(styles)(
  connect(
    null,
    { choiceCell }
  )(Row)
);
