import { Card } from '../models/card';

export interface Deck {
    deck_id: string,
    remaining: number,
    cards: Card[],
    success: boolean
}