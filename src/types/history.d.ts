interface HistoryDTO {
    id: number;
    wordId: number;
    rating: number;
    wrongs: number;
}

interface HistoryDomain {
    id: number;
    wordId: number;
    rating: number;
    wrongs: number;
    createdAt: string;
}

type HistoryParams = Pick<HistoryDTO, 'wordId' | 'rating' | 'wrongs'>;

interface IHistoryModel {
    getHistories(): Promise<HistoryDomain[]>;
    deleteHistory(id?: number): Promise<number>;
    createHistories(params: HistoryParams[]): Promise<HistoryDomain[]>;
}
