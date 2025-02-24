import { Component, OnInit } from '@angular/core';
import { Deck } from './models/deck';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarot-game',
  imports: [CommonModule],
  templateUrl: './tarot-game.component.html',
  styleUrl: './tarot-game.component.scss',
  standalone: true
})
export class TarotGameComponent implements OnInit {
  /*
    The deck of cards id
  */
  public deckOfCards: Deck;

  ngOnInit() {
    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then((response) => response.json())
    .then((deckOfCards: Deck) => {
      this.deckOfCards = {
        deck_id: deckOfCards.deck_id,
        cards: [],
        remaining: deckOfCards.remaining,
        success: deckOfCards.success
      }
    });
  }

  drawThreeCards = () => {
    console.log('Are we getting this?');

    fetch(`https://deckofcardsapi.com/api/deck/${this.deckOfCards.deck_id}/draw/?count=3`)
    .then((response) => response.json())
    .then((deckOfCards: Deck) => {
      this.deckOfCards.cards = deckOfCards.cards
      console.log(deckOfCards.cards);
    })
  }
}
