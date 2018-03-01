import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        // onSubmit change temp
        <form onSubmit={e => {e.preventDefault()
                        // record input guess
                        props.recordValue(e.target[0].value)
                        // empty guess box for next guess
                        e.target[0].value = null}}>
            <input 
                type="text" 
                name="userGuess" 
                id="userGuess"
                className="text" 
                maxLength="3" 
                autoComplete="off"
                placeholder="Enter your Guess" required
                />

            <input 
                type="submit" 
                id="guessButton" 
                className="button" 
                name="submit" 
                value="Guess"/>
        </form>
    );
};

