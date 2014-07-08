"use strict";
var PK = PK || {}; //PK for PoKeR

/**
 * Deck
 */
PK.Deck = function() {
  this.deck       = new Array();
  this.count      = 52;
  this.suit_count = 13;
  this.suits      = [ 'C', 'D', 'H', 'S' ];
  this.cards      = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
}

/**
 * Returns shuffled deck of cards - http://jsfromhell.com/array/shuffle
 */
PK.Deck.prototype.shuffleDeck = function() { //d == deck
  var d = this.deck; 
  for (var j, x, i = d.length; i; j = parseInt(Math.random() * i), x = d[--i], d[i] = d[j], d[j] = x);
  
  return this.deck;
}

/**
 * Generates Deck - abort if deck already generated
 */
PK.Deck.prototype.generateDeck = function() {
  if ( this.deck.length > 0 ) return; //in case we re-generate deck by accident
  
  for ( var card in this.cards ) {
    for ( var suit in this.suits ) {
      this.deck.push( this.cards[ card ] + this.suits[ suit ] );
    }
  }
    
  return this.deck;
}


/**
 * Player
 */
PK.Player = function( name, nick, email ) {
  this.name   = name;
  this.nick   = nick || '';
  this.email  = '';
  this.roll   = 0;
}

/**
 * Game
 */
PK.Game = function( name, smallBlind, bigBlind, gameSpeed ) {
  this.name         = name;
  this.GAME_SPEED   = {
      'fast':   12,
      'medium': 18,
      'slow':   24
      }
  this.MIN_PLAYERS  = 2;
  this.MAX_PLAYERS  = 9;
  this.pot          = 0;
  this.smallBlind   = smallBlind;
  this.bigBlind     = bigBlind;
  this.gameSpeed    = this.GAME_SPEED[gameSpeed];
}

