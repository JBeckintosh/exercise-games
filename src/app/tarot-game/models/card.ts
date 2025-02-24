import { Suit } from '../models/suit';

export interface Card {
    code: string,
    image: string,
    value: string,
    suit: Suit
}