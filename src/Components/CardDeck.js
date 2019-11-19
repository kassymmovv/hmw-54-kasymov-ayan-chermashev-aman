const ranks = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
const suits = ['D','H','C','S'];

class cardDeck{
    cards = [];
    constructor(){
        for(let i = 0; i < ranks.length; i++){
            for(let j = 0; j < suits.length; j++){
                this.cards.push({rank: ranks[i],suit: suits[j]});
            }
        }
    }
    getCard(){
        let random = Math.floor(Math.random()*(this.cards.length -1)+1);
        const card = this.cards.splice(random, 1);

        return card[0]
    }
    getCards(howmany){
        let cards = [];
        for (let i = 0; i < howmany;i++){
            cards.push(this.getCard())
        }
        return cards
    };

}

export default cardDeck;