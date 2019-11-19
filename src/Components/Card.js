import React from 'react';

const Card = props => {
    const suits = {
        'D': 'diams',
        'H': 'hearts',
        'S': 'spades',
        'C': 'clubs',
    };
    const cardSuits = {
        'D': '♦️',
        'H': '♥️',
        'S': '♠️',
        'C': '♣️'
    };

    let  className = `card rank-${props.rank.toLowerCase()} ${suits[props.suit] }`;
    console.log(props);
    return (
        <div className={props.key}>
            <div className={className}>
                <span className="rank">{props.rank}</span>
                <span className="suit">{cardSuits[props.suit]}</span>
            </div>
        </div>
    );
};

export default Card;