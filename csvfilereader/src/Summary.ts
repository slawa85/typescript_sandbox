import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reports/HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalysisWithHtmlReport(teamName: string): Summary {
        return new Summary(
            new WinsAnalysis(teamName),
            new HtmlReport()
        )
    }

    constructor(
        public analyzer: Analyzer,
        public outputTarget: OutputTarget
    ) {}

    buildAndPrintReport(matches: MatchData []): void {
        const analysis = this.analyzer.run(matches);
        this.outputTarget.print(analysis);
    }
}
