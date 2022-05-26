import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { stringToDate } from "./utils";

type MatchData = [Date, String, String, Number, Number, MatchResult, String];

export class MatchReader extends CsvFileReader<MatchData> {
    override mapRow(row: string): MatchData {
        const match = row.split(',');
        return [
            stringToDate(match[0]),
            match[1],
            match[2],
            Number(match[3]),
            Number(match[4]),
            match[5] as MatchResult,
            match[6]
        ];
    }
}
