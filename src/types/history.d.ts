interface HistoryDTO {
    id?: number;
    testType?: string;
    wordsAmount?: number;
    createdAt?: string;
    rating?: number;
    wrongs?: number;
    spendedTime?: number;
    words?: WordDTO[];
}

interface HistoryDomain {
    id?: number;
    testType?: string;
    wordsAmount?: number;
    createdAt?: string;
    wordsHistories?: WordDomain[];
}

type IHistoryDataMapper = Mapper<HistoryDomain, HistoryDTO>;

interface IHistoriesModel {
    getHistories(): Promise<HistoryDomain[]>;
    createHistory(params: HistoryDomain): Promise<HistoryDomain>;
}
