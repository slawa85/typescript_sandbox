import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
    constructor(public teamName: string) {}

    run(matches: MatchData[]): string {
        let wins = 0;
        for(let match of matches){
            const matchResult = match[5];
            if(match[1] === this.teamName && matchResult === MatchResult.HomeWin) {
                wins++;
            }else if(match[2] === this.teamName && matchResult === MatchResult.AwayWin) {
                wins++;
            }
        }

        return `Team ${this.teamName} won ${wins} times`;
    }
}
