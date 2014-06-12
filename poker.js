"use strict";

var Deck = {
  
  self: this,
  count: 52,
  suit_count: 13,
  cards: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  suits: ['S', 'H', 'C', 'D'],
  deck: new Array(),
    
  /**
   * Returns shuffled deck of cards - http://jsfromhell.com/array/shuffle
   */
  shuffleDeck: function ( d ) { //d for deck
    for (var j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
    this.deck = d;
    
    return this.deck;
  },

  /**
   * Generates Deck
   */
  generateDeck: function( cards ) {
    for ( var card in this.cards ) {
      for ( var suit in this.suits ) {
        this.deck.push( this.cards[card] + this.suits[suit] );
      }
    }
    
    return this.deck;
  }
  
}