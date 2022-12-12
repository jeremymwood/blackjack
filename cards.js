`use strict`;
//http://www.brainjar.com/js/blackjack/
//https://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
//https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
//each card an object with suit and rank

let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let deck = new Array();

function createDeck(){
    deck = new Array();
    for (let i = 0 ; i < values.length; i++){
        for(let x = 0; x < suits.length; x++){
            let weight = parseInt(values[i]);
            if (values[i] == "J" || values[i] == "Q" || values[i] == "K")
                weight = 10;
            if (values[i] == "A")
                weight = 11;
            let card = { Value: values[i], Suit: suits[x], Weight: weight };
            deck.push(card);
        }
    }
    return deck;
}




// function shuffle()
// {
//     // for 1000 turns
//     // switch the values of two random cards
//     for (let i = 0; i < 1000; i++)
//     {
//         let location1 = Math.floor((Math.random() * deck.length));
//         let location2 = Math.floor((Math.random() * deck.length));
//         let tmp = deck[location1];
//
//         deck[location1] = deck[location2];
//         deck[location2] = tmp;
//     }
// }
//
// let players = new Array();
// function createPlayers(num)
// {
//     players = new Array();
//     for(let i = 1; i <= num; i++)
//     {
//         let hand = new Array();
//         let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
//         players.push(player);
//     }
// }
//
// function createPlayersUI()
// {
//     document.getElementById('players').innerHTML = '';
//     for(let i = 0; i < players.length; i++)
//     {
//         let div_player = document.createElement('div');
//         let div_playerid = document.createElement('div');
//         let div_hand = document.createElement('div');
//         let div_points = document.createElement('div');
//
//         div_points.className = 'points';
//         div_points.id = 'points_' + i;
//         div_player.id = 'player_' + i;
//         div_player.className = 'player';
//         div_hand.id = 'hand_' + i;
//
//         div_playerid.innerHTML = players[i].ID;
//         div_player.appendChild(div_playerid);
//         div_player.appendChild(div_hand);
//         div_player.appendChild(div_points);
//         document.getElementById('players').appendChild(div_player);
//     }
// }
//
// function startblackjack()
// {
//     document.getElementById('btnStart').value = 'Restart';
//     document.getElementById("status").style.display="none";
//     // deal 2 cards to every player object
//     currentPlayer = 0;
//     createDeck();
//     shuffle();
//     createPlayers(2);
//     createPlayersUI();
//     dealHands();
//     document.getElementById('player_' + currentPlayer).classList.add('active');
// }
//
// function dealHands()
// {
//     // alternate handing cards to each player
//     // 2 cards each
//     for(let i = 0; i < 2; i++)
//     {
//         for (let x = 0; x < players.length; x++)
//         {
//             let card = deck.pop();
//             players[x].Hand.push(card);
//             renderCard(card, x);
//             // updatePoints();
//         }
//     }
//
//     // updateDeck();
// }
//
// function renderCard(card, player)
// {
//     let hand = document.getElementById('hand_' + player);
//     hand.appendChild(getCardUI(card));
// }
//
// function getCardUI(card)
// {
//     let el = document.createElement('div');
//     el.className = 'card';
//     el.innerHTML = card.Suit + ' ' + card.Value;
//     return el;
// }
//
// let currentPlayer = 0;
// function hitMe()
// {
//     // pop a card from the deck to the current player
//     // check if current player new points are over 21
//     let card = deck.pop();
//     players[currentPlayer].Hand.push(card);
//     renderCard(card, currentPlayer);
//     updatePoints();
//     check();
// }
//
// function check()
// {
//     if (players[currentPlayer].Points > 21)
//     {
//         document.getElementById('status').innerHTML = 'Player: ' + players[currentPlayer].ID + ' LOST';
//     }
// }
//
// function stay()
// {
//     // move on to next player, if any
//     if (currentPlayer != players.length-1) {
//         document.getElementById('player_' + currentPlayer).classList.remove('active');
//         currentPlayer += 1;
//         document.getElementById('player_' + currentPlayer).classList.add('active');
//     }
//
//     else {
//         end();
//     }
// }
//
// function end()
// {
//     let winner = -1;
//     let score = 0;
//
//     for(let i = 0; i < players.length; i++)
//     {
//         if (players[i].Points > score && players[i].Points < 22)
//         {
//             winner = i;
//         }
//
//         score = players[i].Points;
//     }
//
//     document.getElementById('status').innerHTML = 'Winner: Player ' + players[winner].ID;
// }