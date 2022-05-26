import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";

export interface DataReader {
    read():void;
    data: string[][];
}

export class MatchReader {
    matches: MatchData[] = [];

    static fromCsv(fileName: string): MatchReader {
        return new MatchReader(new CsvFileReader(fileName));
    }

    constructor(public reader: DataReader){}

    load(): void {
        this.reader.read();
        this.matches = this.reader.data.map((match: string[]): MatchData => {
            return [
                stringToDate(match[0]),
                match[1],
                match[2],
                Number(match[3]),
                Number(match[4]),
                match[5] as MatchResult,
                match[6]
            ];
        })
    }
}
