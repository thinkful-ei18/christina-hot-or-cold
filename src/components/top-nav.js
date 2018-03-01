import React from 'react';

import './top-nav.css';


export default function TopNav(props) {
        return (
            // console.log(showModal)
            <nav>
                <ul className="clearfix">
                    <li>
                        <a 
                            className="what" 
                            href="#"
                            onClick={() => {props.showModal()}}
                        >
                            What?
                        </a>
                    </li>
                    <li>
                        <a 
                            className="new" 
                            href="#"
                            onClick={() => props.resetNewGame()}
                            >
                            + New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }


