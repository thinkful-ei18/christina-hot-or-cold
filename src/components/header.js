import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal'; 

import './header.css';

export default function Header(props) {
    const modal = (props.showModal === true) ? <InfoModal 
                                                    hideModal={() => {props.setModalStateChange()}} /> : null;

    return (
        <header>
            <TopNav 
            resetNewGame={() => props.resetStateNewGame()}
            showModal={() => props.setModalStateChange()}
            />
            {modal}
            <h1>HOT or COLD</h1>
        </header>
    );
};
