import { durationFormatter } from 'human-readable';

const formatTime = durationFormatter<string>();

export type GameResult = {
    won: boolean;
    start: string;
    end: string;
}

export interface WinningPercentageDisplay {
    totalGames: number;
    winningPercentage: string; // Formatted to two decimal places with a % sign
    wins: number;
    losses: number;
};

export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {

    const wins = results.filter(x => x.won).length;
    const losses = results.filter(x => !x.won).length;
    const totalGames = results.length;
    const wp = totalGames > 0
        ? (wins / totalGames) * 100
        : 0
    ;

    return {
        // totalGames: totalGames
        totalGames
        , winningPercentage: `${wp.toFixed(2)}%`
        , wins
        , losses
    };
};

export interface GeneralGameTimeFactsDisplay {
    lastPlayed: string;
    shortestGame: string;
    longestGame: string;
}

export const getGeneralGameTimeFacts = (results: GameResult[], fromDateMilliseconds: number
    ): GeneralGameTimeFactsDisplay =>  {

    const gameEndDatesInMilliseconds = results
        .map(x => Date.parse(x.end))
        .filter(x => x <= fromDateMilliseconds);

    const gameDurationsInMilliseconds = results
        .filter(x => Date.parse(x.end) <= fromDateMilliseconds)
        .map(x => Date.parse(x.end) - Date.parse(x.start));

    return {
        lastPlayed: formatTime(fromDateMilliseconds - Math.max(...gameEndDatesInMilliseconds))
        , shortestGame: formatTime(Math.min(...gameDurationsInMilliseconds))
        , longestGame: formatTime(Math.max(...gameDurationsInMilliseconds))
    }
}

