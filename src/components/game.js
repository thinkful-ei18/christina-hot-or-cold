import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

import './game.css'

export default class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            answer: Math.floor(Math.random() * 100),
            currentGuess: '',
            pastGuesses: [],
            guessNumber: 0,
            feedback: 'Make Your Guess!',
            showModal: false
        }
    }

    resetNewGame() {
        this.setState({
            answer: Math.floor(Math.random() * 100),
            currentGuess: '',
            pastGuesses: [],
            guessNumber: 0,
            feedback: 'Make Your Guess!'
        })
    }


    handleUpdateState(value) {
        const pastGuessArray = this.state.pastGuesses;
        let feebackAnswer;
        
        const difference = Math.abs(value - this.state.answer)

        if (difference >= 50 ) {
            feebackAnswer = 'Really Cold!'
        } else if (difference >= 30) {
            feebackAnswer = 'Lukewarm'
        } else if (difference >= 20) {
            feebackAnswer = 'Warmer'
        } else if (difference >= 10) {
            feebackAnswer = 'Hot!'
        } else if (difference >= 1) {
            feebackAnswer = 'Really Hot!'
        } else feebackAnswer = 'You got it!'

        this.setState({
            currentGuess: value,
            pastGuesses: [...pastGuessArray, value],
            guessNumber: this.state.guessNumber + 1,
            feedback: feebackAnswer
        });
    }

    

    render() {
        return (
            <div>
                <Header 
                    showModal={this.state.showModal}
                    setModalStateChange={() => {this.setState({showModal: !this.state.showModal})}}
                    resetStateNewGame={() => this.resetNewGame()}
                    />
                <div className='game-container'>
                    <GuessSection 
                        setCurrentGuess={(guess) => this.handleUpdateState(guess)}
                        feedback={this.state.feedback} 
                        />
                    <GuessCount count={this.state.guessNumber} />
                    <GuessList guesses={this.state.pastGuesses} /> 
                </div>
            </div>
        );
    }
}

