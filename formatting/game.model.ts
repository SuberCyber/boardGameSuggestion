export interface game {
    name: string;
    link?: string;
    minPlayer: number;
    maxPlayer: number;
    bestPlayerNumber?: number;
    minPlayingTime: string;
    maxPlayingTime: string;
    weight : string;
    rank?: number;
    type: string;
    typeRank?: number;
    category: string [];
    mechanisms: string[];
}