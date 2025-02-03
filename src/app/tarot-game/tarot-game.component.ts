import { Component, OnInit } from '@angular/core';
import { NewDeck } from './models/new-deck';

@Component({
  selector: 'app-tarot-game',
  imports: [],
  templateUrl: './tarot-game.component.html',
  styleUrl: './tarot-game.component.scss',
  standalone: true
})
export class TarotGameComponent implements OnInit {
  /*
    Is the component loading?
  */
  public isLoading: boolean = true;

  /*
    The deck of cards id
  */
  public deckOfCardsId: string;

  ngOnInit() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((response) => response.json())
    .then((deckOfCards: NewDeck) => {
      this.deckOfCardsId = deckOfCards.deck_id
    });
  }
}
