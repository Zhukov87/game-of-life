import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { startGame, generateRandomField, setGameStarted, stopGame } from '../actionCreators/actionCreators';
import { fieldSelector } from '../selectors/selector';
import { withRouter } from 'react-router-dom';

const styles = {
    table: {
        border: 2,
        borderColor: 'black'
    }
};

class GameField extends Component {

    renderBody = (field) => {
        return (
                <table className={classNames(this.props.classes.table)} >
                    {field.map(row => <tr key={field.indexOf(row)}><Cell rowId={field.indexOf(row)} row={row} /></tr>)}
                </table>
        );
    }

    handleStart = () => {
        this.props.setGameStarted(true);
    }

    handleStop = () => {
        this.props.stopGame(false)
    }

    handleGenerateRandomField = (fieldsCellsStateArray) => {
        this.props.generateRandomField(fieldsCellsStateArray);
    }

    componentDidUpdate() {
        if(this.props.gameStarted) {
            let timerId = setTimeout(() => {this.props.startGame()}, 300);
        }
    }

    render() {
        const {field, gameStarted} = this.props;
        let timerId;
        
        return (
            <div>
                {this.renderBody(field)}
                <button onClick={() => this.handleStart()} >Start</button>
                <button onClick={() => this.handleGenerateRandomField()} >Random field</button>
                <button onClick={() => this.handleStop()} > Stop </button>
            </div>
        );
    }
}

export default withRouter(withStyles(styles)(connect(
    fieldSelector, { startGame,
                     generateRandomField, 
                     setGameStarted, 
                     stopGame })(GameField)));