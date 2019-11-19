import React, { Component } from 'react';
import './App.css';
import CardDeck from './Components/CardDeck'
import './cards.css'
import Card from "./Components/Card";
import PokerHand from "./Components/PokerHand";
class App extends    Component {
    state = {
        cards: [],
        result: '',
    };

    getCards = async ()=> {
        await this.setState({
            cards: new CardDeck().getCards(5)
        });

        let get = new PokerHand();
        const result = get.getOutCome(this.state.cards);
        await this.setState({result})

    };

    render() {
        console.log(this.state.cards);

        return (
            <div className="App">
                <button onClick={this.getCards}> Get cards </button>
                <div className="playingCards faceImages table">
                    {this.state.cards.map((card,index)=>(
                        <Card key={index} rank={card.rank} suit={card.suit}/>
                    ))}
                    {this.state.result}
                </div>
            </div>
        );
    }
}

export default App;