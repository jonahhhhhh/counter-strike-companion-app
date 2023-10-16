export type GameResult = boolean;

export interface WinningPercentageDisplay {
    totalGames: number;
    winningPercentage: string; // Formatted to two decimal places with a % sign
    wins: number;
    losses: number;
};

export const getWinningPercentageDisplay = (results: GameResult[]): WinningPercentageDisplay => {

    const wins = results.filter(x => x).length;
    const losses = results.filter(x => !x).length;
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