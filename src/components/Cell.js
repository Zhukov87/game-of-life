import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { choiceCell } from '../actionCreators/actionCreators';
import { grey400, green900 } from 'material-ui/styles/colors';

const styles = {
    cellLive: {
        width: 10,
        height: 10,
        background: green900
    },
    cellDead: {
        width: 10,
        height: 10,
        background: grey400
    }
}
class Cell extends Component {

    handleClick = (index, rowId) => {
            //console.log('rowId index',rowId, index);
            this.props.choiceCell(rowId, index);
    };

    render() {
        const {row, rowId} = this.props;

        const cellArray = row.map((cell, index) => 
            <td className={
            !cell ? classNames(this.props.classes.cellDead) :
                classNames(this.props.classes.cellLive)} onClick={() => this.handleClick(index, rowId)} >
        </td>);

        return (
            cellArray
        );
    }
}

export default withStyles(styles)(connect(null, { choiceCell })(Cell));