`use strict`;
//each card an object with suit and rank

const suit = [`diamonds`,`clubs`,`hearts`,`spades`];
const rank = [`ace`,`king`,`queen`,`jack`,`10`,`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2`];

const card = {
    suit,
    rank
}

//creates object containing all suits and ranks
// for (const property in card) {
//     console.log(`${property}: ${card[property]}`);
// }
// console.log(card);