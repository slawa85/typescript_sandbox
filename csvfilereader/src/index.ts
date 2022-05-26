import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

Summary.winsAnalysisWithHtmlReport('Chelsea').buildAndPrintReport(matchReader.matches)
