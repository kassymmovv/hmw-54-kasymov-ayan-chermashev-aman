class PokerHand{
    getOutCome = (g) => {
        let rank = 0;
        let suit = 0;
        for (let i = 0;i < g.length;i++){
            for (let j = i + 1;j < g.length;j++){
                if (g[i].rank === g[j].rank){rank++}
                if (g[i].suit === g[j].rank){suit++}
            }
        }
        if (rank === 1) {
            return "Pair"
        }
        if (rank === 2){
            return 'Two pairs'
        }
        if (rank === 3){
            return 'Three of a kind'
        }
        if (suit === 5){
            return 'flush'
        }
        else {return 'no combination'}
    }

}

export default PokerHand;